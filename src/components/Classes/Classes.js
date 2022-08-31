import { MuiDrawer } from "../../components/Drawer/MuiDrawer";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import ClassCard from "../ClassCard/ClassCard";
// import useStyles from "./Classes.style";
import { Grid, Box } from "@material-ui/core";
import UserMessage from "../UserMessage/UserMessage";

function Classes() {
  const [classes, setClasses] = useState([]);

  const [isMessageOpen, setUserMessageOpen] = useState(false);

  const handleUserMessageClose = () => {
    setUserMessageOpen(false);
  };

  useEffect(() => {
    axios.get(`http://localhost:3000/classes`).then(({ data }) => {
      setClasses(data);
    });
  }, []);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDeleteClass = async (classId) => {
    await axios
      .get(`http://localhost:3000/classStudents/${classId}`)
      .then(({ data }) => {
        if (data.length > 0) {
          setUserMessageOpen(true);
        } else {
          axios
            .delete(`http://localhost:3000/deleteClass/${classId}`)
            .then(({ data }) => {
              setClasses(data);
            });
        }
      });
  };

  return (
    <Box>
      <Header isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <MuiDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />

      <Grid container>
        <Grid container item>
          {classes.map((classData, index) => (
            <ClassCard
              classData={classData}
              key={index}
              handleDeleteClass={handleDeleteClass}
            />
          ))}
        </Grid>
      </Grid>
      <UserMessage
        visible={isMessageOpen}
        handleUserMessageClose={handleUserMessageClose}
        messageText="לא ניתן למחוק כיתה עם סטודנטים"
        severity="error"
      />
    </Box>
  );
}

export default Classes;
