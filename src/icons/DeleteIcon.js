import React from "react";
import { SvgIcon } from "@material-ui/core";
import ThemeContext from "../Context/ThemeContext";
import { useContext } from "react";

const DeleteIcon = (props) => {
  const { themeColor } = useContext(ThemeContext);
  return (
    <SvgIcon width="14" height="18" viewBox="0 0 14 18" fill="none" {...props}>
      <path
        d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z"
        // fill="#3F50B5"
        fill={themeColor}
      />
    </SvgIcon>
  );
};

export default DeleteIcon;
