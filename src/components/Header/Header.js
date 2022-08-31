import MenuIcon from "@material-ui/icons/Menu";
import ColorPicker from "../../icons/ColorPicker";
import { Typography, Box } from "@material-ui/core";
import useStyles from "./Header.style";
import CardMedia from "@material-ui/core/CardMedia";
import ThemeContext from "../../Context/ThemeContext";
import { useContext } from "react";

function Header({ setIsDrawerOpen }) {
  const { themeColor, setThemeColor } = useContext(ThemeContext);
  const classes = useStyles({ backgroundColor: themeColor });
  return (
    <>
      {/* <div
      // style={{
        backgroundColor: { themeColor },
      }}
      > */}
      <Box className={classes.header}>
        <MenuIcon
          className={classes.icon}
          onClick={() => setIsDrawerOpen(true)}
        />
        <Typography className={classes.title}>Shob Classes</Typography>
        <ColorPicker
          className={classes.colorPicker}
          onClick={() => {
            setThemeColor(themeColor == "#ff0000" ? "#3F50B5" : "#ff0000");
          }}
        />
        {/* <CardMedia
          className={classes.media}
          image="../../icons/dog.jpg"
          // src={require("../../icons/Vector.png")}
          // title="Paella dish"
        /> */}
        {/* <p
          onClick={() => {
            setThemeColor(themeColor == "#ff0000" ? "#3F50B5" : "#ff0000");
          }}
        >
          {themeColor}
        </p> */}
      </Box>
      {/* </div> */}
    </>
  );
}

export default Header;
