import React from "react";
import { ThemeProvider } from "styled-components/macro";

export const theme = {
  colors: {
    white: "#ffffff",
    black: "#000000",
    orange: "#ffa500",
    orangeRed: "#ff4500",
  },
};

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
