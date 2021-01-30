import "styled-components";

declare module "styled-components" {
  import { DefaultBreakpointName } from "styled-components-breakpoint";

  export interface DefaultTheme {
    fontFamily: {
      primary: string;
      secondary: string;
    };
    fontWeight: {
      primary: {
        light: number;
        bold: number;
        extraBold: number;
      };
      secondary: {
        light: number;
        regular: number;
        bold: number;
      };
    };
    colors: {
      backgroundLighten: string;
      background: string;
      backgroundDarken: string;
      primary: string;
      primaryDarken: string;
      text: string;
      textMuted: string;
      red: string;
      green: string;
    };
    breakpoints: {
      [name in DefaultBreakpointName]: number;
    };
  }
}
