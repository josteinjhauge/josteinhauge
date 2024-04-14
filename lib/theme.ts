
import { PaletteOptions, createTheme } from "@mui/material";

const palette: PaletteOptions = {
  primary: {
    main: "#1c1c1c",
  },
  secondary: {
    main: "#fff",
  },
  text: {
    primary: "#fff",
    secondary: "#d3d3d3",
  },
  background: {
    default: "#1c1c1c",
    paper: "#1c1c1c",
  },
};

export const theme = createTheme({
  palette,
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 768,
      lg: 1050,
      xl: 1920,
    },
  },
});

export const ICON_SIZE = "2rem";
