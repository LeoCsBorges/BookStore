import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0B7C6B",
      light: "#E4FFFB",
      contrastText: "red",
    },
    secondary: {
      main: "#FF6320",
      light: "#FFECE3",
    },
    common: {
      white: "#FFFFFF",
      black: "#000000",
    },
    dark: {
      tone1: "#101313",
      tone2: "#383A3A",
      tone3: "#848786",
      tone4: "#CCCCCC",
      tone5: "#E4E9E8",
      tone6: "#EFF6F5",
      tone7: "#F9FCFB",
    },
    statusColor: {
      main: "#219FFF",
      light: "E4F4FF",
      infoMain: "#17BD8D",
      infoLight: "#DFFEF5",
      warningMain: "#FFA114",
      warningLight: "#FFF1DC",
      errorMain: "#FF4E3E",
      errorLight: "#FFECEB",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "56px",
      fontWeight: "bold",
      lineHeight: "66px",
    },
    h2: {
      fontSize: "42px",
      fontWeight: "bold",
      lineHeight: "52px",
    },
    h3: {
      fontSize: "30px",
      fontWeight: "bold",
      lineHeight: "40px",
    },
    h4: {
      fontSize: "24px",
      fontWeight: "bold",
      lineHeight: "34px",
    },
    h5: {
      fontSize: "20px",
      fontWeight: "bold",
      lineHeight: "40px",
    },
    h6: {
      fontSize: "16px",
      fontWeight: "bold",
      lineHeight: "32px",
    },
  },
});

export default theme;
