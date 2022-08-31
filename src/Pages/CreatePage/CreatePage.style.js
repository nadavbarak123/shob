import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  grid: {
    display: "grid",
    gridTemplate: "auto auto / repeat(2, 1fr)",
    placeItems: "center",
    paddingTop: 40,
  },
  section: { width: 300 },
});

export default useStyles;
