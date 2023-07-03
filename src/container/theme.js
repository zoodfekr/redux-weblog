import { createTheme } from "@mui/material/styles";
import { blue, red, grey, lightBlue } from "@mui/material/colors";

//NOTE Create Custom Theme
export const darktheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: {
      main: grey[800],
    }
  }

});

export const lighttheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: grey[400],
    }
  }
});