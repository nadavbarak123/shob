import React, { useState, useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/core/styles";
import { Alert } from "@material-ui/lab";
import { Box } from "@material-ui/core";

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function UserMessage({
  visible,
  messageText,
  handleUserMessageClose,
  severity,
}) {
  const classes = useStyles();
  const [open, setOpen] = useState(visible);

  const handleClose = (event, reason) => {
    // if (reason === "clickaway") {
    //   return;
    // }
    handleUserMessageClose();
    setOpen(false);
  };
  useEffect(() => {
    setOpen(visible);
  }, [visible]);

  return (
    <Box className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {messageText}
        </Alert>
      </Snackbar>
    </Box>
  );
}
