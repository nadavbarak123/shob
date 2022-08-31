import { useState, React, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import { blue } from "@material-ui/core/colors";
import axios from "axios";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

export default function StudentsList({ onClose, open, classId }) {
  const classes = useStyles();
  const [students, setStudentsList] = useState([]);
  const handleClose = () => {
    onClose();
  };

  const handledeleteClick = async (studentId) => {
    await axios
      .delete(
        `http://localhost:3000/deleteStudentFromClass/${classId}/${studentId}`
      )
      .then(({ data }) => {
        setStudentsList(data);
        if (data.length === 0) {
          onClose();
        }
      });
  };
  useEffect(() => {
    if (open) {
      axios
        .get(`http://localhost:3000/classStudents/${classId}`)
        .then(({ data }) => {
          setStudentsList(data);
        });
    }
  }, [open]);
  return (
    <Dialog
      onClose={handleClose}
      //   aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle>Class Students</DialogTitle>
      <List>
        {students.map((student) => (
          <ListItem
            // button
            // onClick={() => handleListItemClick(email)}
            key={student.studentId}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={student.firstName + " " + student.lastName}
            />
            <Button onClick={() => handledeleteClick(student.studentId)}>
              <DeleteIcon />
            </Button>
          </ListItem>
        ))}

        {/* <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick("addAccount")}
        >
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem> */}
      </List>
    </Dialog>
  );
}

StudentsList.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string,
};

// export function SimpleDialogDemo() {
//   const [open, setOpen] = React.useState(false);
//   const [selectedValue, setSelectedValue] = React.useState(emails[1]);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = (value) => {
//     setOpen(false);
//     setSelectedValue(value);
//   };

//   return (
//     <div>
//       <Typography variant="subtitle1">Selected: {selectedValue}</Typography>
//       <br />
//       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//         Open simple dialog
//       </Button>
//       <SimpleDialog
//         selectedValue={selectedValue}
//         open={open}
//         onClose={handleClose}
//       />
//     </div>
//   );
// }
