import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          text:{
            primary:"#2B3445"
          }
          ,
          myColor: {
            main: "#F6F9FC",
          },
          bg:{
            main:"#F6F6F6"
          }
          ,
          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: green[200],
          },
          favColorbg: {
            main:  "#2834458b",
          },
        }
      : {
          // palette values for dark mode
        
          myColor: {
            main: "#252b32",
          },

          bg:{
            main:"#252b32"
          }
          ,
          neutral: {
            main: "#64748B",
          },

          favColor: {
            main: green[200],
          },
          favColorbg: {
            main:  "#2834458b",
          },
          text: {
            primary: "#fff",
          },
        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};