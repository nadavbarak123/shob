import { Drawer, Box, Typography } from "@material-ui/core";
import useStyles from "./MuiDrawer.style";
import { useNavigate } from "react-router-dom";

export const MuiDrawer = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box className={classes.menu}>
          <Typography variant="h6" component="div">
            <p onClick={() => navigate("/classes")}>Classes</p>
          </Typography>
          <Typography variant="h6" component="div">
            <p onClick={() => navigate("/students")}>Students</p>
          </Typography>
          <Typography variant="h6" component="div">
            <p onClick={() => navigate("/create")}>Create</p>
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};
