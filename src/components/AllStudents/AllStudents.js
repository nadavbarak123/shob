import { React, useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import useStyles from "./AllStudents.style";
import StudentAssign from "../StudentAssign/StudentAssign";
import UserMessage from "../UserMessage/UserMessage";
import ThemeContext from "../../Context/ThemeContext";
import { useContext } from "react";
import { Box } from "@material-ui/core";

function AllStudents() {
  const [rows, setRows] = useState([]);
  const [isStudentAssignOpen, setIsStudentAssignOpen] = useState(false);
  const [studentId, setStudentId] = useState();
  const [isMessageOpen, setUserMessageOpen] = useState(false);
  const [reUpdateStudeltsList, setReUpdateStudeltsList] = useState(false);
  const { themeColor } = useContext(ThemeContext);
  const handleUserMessageClose = () => {
    setUserMessageOpen(false);
  };
  const classes = useStyles();
  //   useEffect(() => {
  //     axios.get(`http://localhost:3000/allStudents`).then(({ data }) => {
  //       setRows(data);
  //     });
  //   }, []);
  // const getAllStudents = () => {

  // };

  useEffect(() => {
    axios.get(`http://localhost:3000/allStudents`).then(({ data }) => {
      setRows(data);
    });
  }, [reUpdateStudeltsList]);

  // getAllStudents();
  const onDeleteClick = (studentId) => {
    axios
      .delete(`http://localhost:3000/deleteStudent/${studentId}`)
      .then(({ data }) => {
        setRows(data);
      });
  };
  const onAssignClick = (studentId) => {
    axios
      .get(`http://localhost:3000/classOfStudent/${studentId}`)
      .then(({ data }) => {
        if (data) {
          setUserMessageOpen(true);
        } else {
          setStudentId(studentId);
          setIsStudentAssignOpen(true);
        }
      });
  };
  const onCloseStudentAssign = () => {
    setIsStudentAssignOpen(false);
    setReUpdateStudeltsList(!reUpdateStudeltsList);
  };

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.header}>studentId</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Profession</TableCell>
              <TableCell>Class Name</TableCell>
              <TableCell>Assign to class</TableCell>
              <TableCell>Delete student</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.studentId}>
                <TableCell>{row.studentId}</TableCell>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.profession}</TableCell>
                <TableCell>
                  {row.classes.length > 0 && row.classes[0].className}
                </TableCell>
                <TableCell>
                  <Button
                    disabled={row.classes.length > 0}
                    variant="contained"
                    color={themeColor == "#ff0000" ? "error" : "primary"}
                    onClick={() => {
                      onAssignClick(row.studentId);
                    }}
                  >
                    Assign
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color={themeColor == "#ff0000" ? "error" : "primary"}
                    onClick={() => {
                      onDeleteClick(row.studentId);
                    }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <StudentAssign
        open={isStudentAssignOpen}
        onClose={onCloseStudentAssign}
        studentId={studentId}
      ></StudentAssign>
      <UserMessage
        visible={isMessageOpen}
        handleUserMessageClose={handleUserMessageClose}
        messageText="לא ניתן לשבץ סטודנט ליותר מכיתה אחת"
        severity="error"
      />
    </Box>
  );
}

export default AllStudents;
