import { makeStyles } from "@material-ui/core";

// const useStyles = makeStyles({
//   header: {
//     display: "flex",
//     backgroundColor: "#3F50B5",
//     // padding: 20,
//     color: "#ffffff",
//     fontSize: "32px",
//     // textAlign: "center",
//     height: "97px",
//   },
//   icon: { height: 60 },
//   title: {
//     fontSize: "43px",
//     paddingLeft: "40px",
//   },
//   media: {
//     backgroundColor: "red",
//     height: 0,
//     paddingTop: "56.25%", // 16:9
//   },
// });

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    background: ({ backgroundColor }) => backgroundColor,
    // padding: 20,
    color: "#ffffff",
    fontSize: "32px",
    // textAlign: "center",
    height: "97px",
  },
  icon: { height: 60, paddingTop: 20 },
  title: {
    fontSize: "43px",
    paddingLeft: "40px",
    paddingTop: 20,
  },
  media: {
    backgroundColor: "red",
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  colorPicker: {
    paddingLeft: 20,
    paddingTop: 45,
  },
}));

export default useStyles;
