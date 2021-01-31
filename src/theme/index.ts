import { DefaultTheme } from "styled-components";
import breakpoints from "./breakpoints";

const theme: DefaultTheme = {
  fontFamily: {
    primary: "Poppins",
    secondary: "Roboto",
  },
  fontWeight: {
    primary: {
      light: 300,
      bold: 700,
      extraBold: 800,
    },
    secondary: {
      light: 300,
      regular: 400,
      bold: 700,
    },
  },
  colors: {
    backgroundLighten: "#F9FBFB",
    background: "#EEF2F3",
    backgroundDarken: "#E2E9EB",
    primary: "#00B3DB",
    primaryDarken: "#005669",
    text: "#001E24",
    textMuted: "#324C52",
    red: "#EB5760",
    green: "#2CD598",
    yellow: "#F2C94C",
  },
  breakpoints,
};

export default theme;
