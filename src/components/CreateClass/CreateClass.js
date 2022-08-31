import { React, useState } from "react";
import useStyles from "./CreateClass.style";
import { Box, Typography, TextField } from "@material-ui/core";
import { Button } from "@mui/material";
import InputMask from "react-input-mask";
import { validateClass } from "../../Validations/CreatePage.val";
import UserMessage from "../UserMessage/UserMessage";
import axios from "axios";
import ThemeContext from "../../Context/ThemeContext";
import { useContext } from "react";

function CreateClass() {
  const classes = useStyles();

  const [createClassStates, setCreateClassStates] = useState({
    classId: "",
    maxSeats: "",
    className: "",
    isMessageOpen: false,
    errMessage: "",
  });

  // const [classId, setClassId] = useState("");
  // const [maxSeats, setMaxSeats] = useState("");
  // const [className, setClassName] = useState("");
  // const [isMessageOpen, setUserMessageOpen] = useState(false);
  // const [errMessage, setErrMessage] = useState("");
  const { themeColor } = useContext(ThemeContext);

  const handleUserMessageClose = () => {
    // setUserMessageOpen(false);
    setCreateClassStates((prevState) => ({
      ...prevState,
      isMessageOpen: false,
    }));
  };
  function handleClassIdChanged(event) {
    // setClassId(event.target.value);
    setCreateClassStates((prevState) => ({
      ...prevState,
      classId: event.target.value,
    }));
  }
  function handleMaxSeatsChanged(event) {
    // setMaxSeats(event.target.value);
    setCreateClassStates((prevState) => ({
      ...prevState,
      maxSeats: event.target.value,
    }));
  }
  function handleClassNameChanged(event) {
    // setClassName(event.target.value);
    setCreateClassStates((prevState) => ({
      ...prevState,
      className: event.target.value,
    }));
  }

  const validateClassData = async () => {
    let errorMsg = await validateClass(
      createClassStates.classId,
      createClassStates.maxSeats,
      createClassStates.className
    );
    // setErrMessage(errorMsg);
    setCreateClassStates((prevState) => ({
      ...prevState,
      errMessage: errorMsg,
    }));
    if (errorMsg === "") {
      const result = await axios.put(
        `http://localhost:3000/newClass/${createClassStates.classId}/${createClassStates.maxSeats}/${createClassStates.className}`
      );
      if (result.data.result) {
        // setClassId("");
        // setMaxSeats("");
        // setClassName("");
        setCreateClassStates((prevState) => ({
          ...prevState,
          className: "",
          maxSeats: "",
          classId: "",
        }));
      }
      // if (data.data.length > 0) {
    } else {
      // setUserMessageOpen(true);
      setCreateClassStates((prevState) => ({
        ...prevState,
        isMessageOpen: true,
      }));
    }

    // if (errorMsg != "") {
    //   setUserMessageOpen(true);
    // }
  };

  return (
    <Box>
      <Typography className={classes.title}>Create new class</Typography>
      <Box className={classes.item}>
        <InputMask
          mask="999"
          maskChar=" "
          value={createClassStates.classId}
          onChange={handleClassIdChanged}
        >
          {() => (
            <TextField
              required
              // id="classId"
              label="Class ID"
              variant="outlined"
            />
          )}
        </InputMask>
      </Box>
      <Box className={classes.item}>
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          value={createClassStates.className}
          onChange={handleClassNameChanged}
        />
      </Box>
      <Box className={classes.item}>
        <InputMask
          mask="99"
          maskChar=" "
          value={createClassStates.maxSeats}
          onChange={handleMaxSeatsChanged}
        >
          {() => <TextField label="Max Seats" variant="outlined" />}
        </InputMask>
      </Box>
      <Button
        variant="contained"
        color={themeColor === "#ff0000" ? "error" : "primary"}
        onClick={() => validateClassData()}
      >
        CREATE CLASS
      </Button>
      <UserMessage
        visible={createClassStates.isMessageOpen}
        handleUserMessageClose={handleUserMessageClose}
        messageText={createClassStates.errMessage}
        severity="error"
      />
    </Box>
  );
}

export default CreateClass;
