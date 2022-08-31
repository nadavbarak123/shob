import { React, useState } from "react";
import useStyles from "./CreateStudent.style";
import { Box, Typography, TextField } from "@material-ui/core";
import { Button } from "@mui/material";
import InputMask from "react-input-mask";
import { validateStudent } from "../../Validations/CreatePage.val";
import UserMessage from "../UserMessage/UserMessage";
import axios from "axios";
import ThemeContext from "../../Context/ThemeContext";
import { useContext } from "react";

function CreateStudent() {
  const classes = useStyles();
  const [studentId, setStudentId] = useState();
  const [age, setAge] = useState();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [profession, setProfession] = useState("");
  const [isMessageOpen, setUserMessageOpen] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const { themeColor } = useContext(ThemeContext);

  const handleUserMessageClose = () => {
    setUserMessageOpen(false);
  };
  function handleStudentIdChanged(event) {
    setStudentId(event.target.value);
  }
  function handleAgeChange(event) {
    setAge(event.target.value);
  }
  const handleSetFname = (event) => {
    setFname(event.target.value);
  };
  const handleSetLname = (event) => {
    setLname(event.target.value);
  };
  const handleSetProfession = (event) => {
    setProfession(event.target.value);
  };
  const validateStudentData = async () => {
    let errorMsg = await validateStudent(
      studentId,
      age,
      fname,
      lname,
      profession
    );
    setErrMessage(errorMsg);
    if (errorMsg === "") {
      const result = await axios.put(
        `http://localhost:3000/newStudent/${studentId}/${age}/${fname}/${lname}/${profession}`
      );
      if (result.data.result) {
        setStudentId("");
        setFname("");
        setLname("");
        setProfession("");
        setAge("");
      }
      // if (data.data.length > 0) {
    } else {
      setUserMessageOpen(true);
    }
  };
  return (
    <Box>
      <Typography className={classes.title}>Add new student</Typography>
      <Box className={classes.item}>
        <InputMask
          mask="999999999"
          maskChar=" "
          value={studentId}
          onChange={handleStudentIdChanged}
        >
          {() => <TextField label="ID" variant="outlined" />}
        </InputMask>
      </Box>
      <Box className={classes.item}>
        <TextField
          label="First Name"
          variant="outlined"
          value={fname}
          onChange={handleSetFname}
        />
      </Box>
      <Box className={classes.item}>
        <TextField
          label="Last Name"
          variant="outlined"
          value={lname}
          onChange={handleSetLname}
        />
      </Box>
      <Box className={classes.item}>
        <InputMask
          mask="99"
          maskChar=" "
          value={age}
          onChange={handleAgeChange}
        >
          {() => <TextField label="Age" variant="outlined" />}
        </InputMask>
      </Box>
      <Box className={classes.item}>
        <TextField
          label="Profession"
          variant="outlined"
          value={profession}
          onChange={handleSetProfession}
        />
      </Box>
      <Button
        variant="contained"
        color={themeColor == "#ff0000" ? "error" : "primary"}
        onClick={() => validateStudentData()}
      >
        ADD STUDENT
      </Button>
      <UserMessage
        visible={isMessageOpen}
        handleUserMessageClose={handleUserMessageClose}
        messageText={errMessage}
        severity="error"
      />
    </Box>
  );
}

export default CreateStudent;
