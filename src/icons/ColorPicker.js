import React from "react";
import { SvgIcon } from "@material-ui/core";
import ThemeContext from "../Context/ThemeContext";
import { useContext } from "react";

const ColorPicker = (props) => {
  const { themeColor } = useContext(ThemeContext);
  return (
    <SvgIcon width="30" height="30" viewBox="0 0 30 30" fill="none" {...props}>
      <path
        d="M28.3308 14.4049L15.5808 1.65492C15.0708 1.14492 14.3625 0.833252 13.5833 0.833252H3.66665C2.10831 0.833252 0.833313 2.10825 0.833313 3.66659V13.5833C0.833313 14.3624 1.14498 15.0708 1.66915 15.5949L14.4191 28.3449C14.9291 28.8549 15.6375 29.1666 16.4166 29.1666C17.1958 29.1666 17.9041 28.8549 18.4141 28.3308L28.3308 18.4141C28.855 17.9041 29.1666 17.1958 29.1666 16.4166C29.1666 15.6374 28.8408 14.9149 28.3308 14.4049ZM5.79165 7.91659C4.61581 7.91659 3.66665 6.96742 3.66665 5.79159C3.66665 4.61575 4.61581 3.66659 5.79165 3.66659C6.96748 3.66659 7.91665 4.61575 7.91665 5.79159C7.91665 6.96742 6.96748 7.91659 5.79165 7.91659ZM22.4658 19.6324L16.4166 25.6816L10.3675 19.6324C9.72998 18.9808 9.33331 18.1024 9.33331 17.1249C9.33331 15.1699 10.92 13.5833 12.875 13.5833C13.8525 13.5833 14.745 13.9799 15.3825 14.6316L16.4166 15.6516L17.4508 14.6174C18.0883 13.9799 18.9808 13.5833 19.9583 13.5833C21.9133 13.5833 23.5 15.1699 23.5 17.1249C23.5 18.1024 23.1033 18.9949 22.4658 19.6324Z"
        fill="white"
      />
    </SvgIcon>
  );
};

export default ColorPicker;

{
  /* <svg
  width="30"
  height="30"
  viewBox="0 0 30 30"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M28.3308 14.4049L15.5808 1.65492C15.0708 1.14492 14.3625 0.833252 13.5833 0.833252H3.66665C2.10831 0.833252 0.833313 2.10825 0.833313 3.66659V13.5833C0.833313 14.3624 1.14498 15.0708 1.66915 15.5949L14.4191 28.3449C14.9291 28.8549 15.6375 29.1666 16.4166 29.1666C17.1958 29.1666 17.9041 28.8549 18.4141 28.3308L28.3308 18.4141C28.855 17.9041 29.1666 17.1958 29.1666 16.4166C29.1666 15.6374 28.8408 14.9149 28.3308 14.4049ZM5.79165 7.91659C4.61581 7.91659 3.66665 6.96742 3.66665 5.79159C3.66665 4.61575 4.61581 3.66659 5.79165 3.66659C6.96748 3.66659 7.91665 4.61575 7.91665 5.79159C7.91665 6.96742 6.96748 7.91659 5.79165 7.91659ZM22.4658 19.6324L16.4166 25.6816L10.3675 19.6324C9.72998 18.9808 9.33331 18.1024 9.33331 17.1249C9.33331 15.1699 10.92 13.5833 12.875 13.5833C13.8525 13.5833 14.745 13.9799 15.3825 14.6316L16.4166 15.6516L17.4508 14.6174C18.0883 13.9799 18.9808 13.5833 19.9583 13.5833C21.9133 13.5833 23.5 15.1699 23.5 17.1249C23.5 18.1024 23.1033 18.9949 22.4658 19.6324Z"
    fill="white"
  />
</svg>; */
}