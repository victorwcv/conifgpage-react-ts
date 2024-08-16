import { createTheme } from "@mui/material/styles";

const palette = {
  primary: {
    light: "#ffffff",
    main: "#ffffff",
    dark: "#f5f5f5",
    contrastText: "#000000",
  },
  secondary: {
    light: "#d4efb1",
    main: "#a8df63",
    dark: "#688a3d",
    contrastText: "#283518",
  },
  info: {
    light: "#e1eef3",
    main: "#96c3d6",
    dark: "#6b9db6",
    contrastText: "#ffffff",
  },
};

const theme = createTheme({
  palette,
});

export default theme;
