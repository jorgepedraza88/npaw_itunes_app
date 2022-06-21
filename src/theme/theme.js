import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#2174a8",
    },
    background: {
      default: "#f1f5f9",
    },
    text: {
      primary: "#171720",
    },
  },
  typography: {
    fontFamily: [
      "Source Sans Pro",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

theme.typography.h3 = {
  fontFamily: "Poppins",
};
