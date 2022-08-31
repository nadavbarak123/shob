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
import AddIcon from "@material-ui/icons/Add";
import StudentIcon from "../../icons/StudentIcon";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

export default function StudentAssign({ onClose, open, studentId }) {
  const classes = useStyles();
  const [roomClasses, setRoomClassesList] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/classes`).then(({ data }) => {
      setRoomClassesList(data);
    });
  }, []);
  const handleClose = () => {
    onClose();
  };

  const handleAssignClick = async (classId) => {
    await axios
      .put(`http://localhost:3000/assignStudentToClass/${classId}/${studentId}`)
      .then(({ data }) => {});
    onClose();
  };
  return (
    <Dialog
      onClose={handleClose}
      //   aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle>Available Classes</DialogTitle>
      <List>
        {roomClasses.map((roomClassData) => (
          <ListItem
            // button
            // onClick={() => handleListItemClick(email)}
            key={roomClassData.classId}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <StudentIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={roomClassData.className} />
            <Button onClick={() => handleAssignClick(roomClassData.classId)}>
              <AddIcon />
            </Button>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

StudentAssign.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string,
};
