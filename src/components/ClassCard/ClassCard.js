import { React, useState } from "react";
import useStyles from "./ClassCard.style";
import { Box, Typography } from "@material-ui/core";
import DeleteIcon from "../../icons/DeleteIcon";
import StudentsList from "../StudentsLIst/StudentsLIst";
import axios from "axios";

function ClassCard({ classData, handleDeleteClass }) {
  const classes = useStyles();
  const [isStudentsListOpen, setIsStudentsListOpen] = useState(false);

  const showStudentsList = async () => {
    await axios
      .get(`http://localhost:3000/classStudents/${classData.classId}`)
      .then(({ data }) => {
        if (data.length > 0) {
          setIsStudentsListOpen(true);
        }
      });
  };
  const closeStudentsList = () => {
    setIsStudentsListOpen(false);
  };

  return (
    <Box className={classes.card}>
      <Typography className={classes.title}>{classData.className}</Typography>
      <Typography className={classes.seatsLeft}>
        There are {classData.seatsInClass - classData.studentId.length} seats
        left
      </Typography>
      <Typography className={classes.totalSeats}>
        out of {classData.seatsInClass}
      </Typography>
      <Box
        className={classes.studentsList}
        // onClick={showStudentsList}
      >
        {/* STUDENTS LIST */}
        <Typography onClick={() => showStudentsList()}>
          STUDENTS LIST
        </Typography>
        <DeleteIcon
          className={classes.deleteIcon}
          onClick={() => {
            handleDeleteClass(classData.classId);
          }}
        />
      </Box>
      <StudentsList
        open={isStudentsListOpen}
        onClose={closeStudentsList}
        studentsId={classData.studentsId}
        classId={classData.classId}
      />
    </Box>
  );
}

export default ClassCard;
