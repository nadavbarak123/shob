import { MuiDrawer } from "../../components/Drawer/MuiDrawer";
import Header from "../../components/Header/Header";
import { Grid, Box } from "@material-ui/core";
import { useState } from "react";
import CreateClass from "../../components/CreateClass/CreateClass";
import CreateStudent from "../../components/CreateStudent/CreateStudent";
import useStyles from "./CreatePage.style";

function Create() {
  const classes = useStyles();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <Box>
      <Header isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
      <MuiDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
      <Grid
        container
        className={classes.grid}

        // direction="row"
        // justifyContent="space-around"
        // alignItems="center"
        // justify="center"
        // display="flex"
      >
        <Grid container item xs={6}>
          <CreateClass></CreateClass>
        </Grid>
        <Grid container item xs={6}>
          <CreateStudent></CreateStudent>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Create;
