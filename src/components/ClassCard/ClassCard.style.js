import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  card: {
    width: 199,
    height: 188,
    margin: 20,
    backgroundColor: "#ffffff",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "4px",
    padding: 10,
  },
  title: {
    fontSize: "20px",
  },
  seatsLeft: {
    fontSize: "16px",
  },
  totalSeats: {
    fontSize: "14px",
  },
  studentsList: {
    paddingTop: "80px",
    display: "flex",
  },
  deleteIcon: {
    paddingLeft: "20px",
    color: "#FF0000",
  },
  cardMd: {
    backgroundColor: red,
  },
});

export default useStyles;
