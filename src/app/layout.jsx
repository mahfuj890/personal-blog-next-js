"use client";
// import {  ThemeProvider } from '@mui/material/styles';
import "./globals.css";
import { Inter } from "next/font/google";
import customizeTheme from "@/theme/customizeTheme";
import {
  Box,
  Button,
  CssBaseline,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { createContext, useMemo, useState } from "react";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import { amber, deepOrange, grey } from "@mui/material/colors";
import Header from "@/components/header/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Personal Blog",
  description: "Generated by create next app",
};

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === "dark" && {
        main: amber[300],
      }),
    },
    ...(mode === "dark" && {
      background: {
        default: deepOrange[900],
        paper: deepOrange[900],
      },
    }),
    // ...(mode === 'light'
    // ? {
    //     primary: {
    //       main:grey[900]
    //     },
    //     secondary: {
    //       main:grey[800]
    //     },
    //     custom:{
    //       main:"#94C9A9"
    //     }
    //   }
    // : {
    //     primary: {
    //       main:'#C6ECAE'
    //     },
    //     secondary: {
    //       main:grey[500]
    //     },
    //   }),
    text: {
      ...(mode === "light"
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: "#C6ECAE",
            secondary: grey[500],
          }),
    },
  },
});

const token = (mode) => ({
  ...(mode === "dark"
    ? {
        red: {
          100: "#AD2831",
        },
      }
    : {
        red: {
          100: "#38040E",
        },
      }),
});

const themeSetting = (mode) => {
  const color = token(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: color.red[100],
            },
          }
        : {
            primary: {
              main: color.red[100],
            },
          }),
    },
  };
};

const colorMoodContext = createContext({
  toggleColorMode: () => {},
});

const useMode = () => {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const useThemeCustomize = useMemo(
    () => createTheme(themeSetting(mode)),
    [mode]
  );

  return [useThemeCustomize, colorMode];
};

export default function RootLayout({ children }) {
  const [useThemeCustomize, colorMode] = useMode();
  const [theme, setTheme] = useState(false);
  // const useThemeColor = useTheme();

  const darkModeTheme = createTheme(getDesignTokens(theme ? "dark" : "light"));

  return (
    <html lang="en">
      <body className={inter.className}>
        <colorMoodContext.Provider value={colorMode}>
          <ThemeProvider theme={customizeTheme}>
            <CssBaseline />
            <>
              {/* <button  >change </button>
            <Typography variant="h6">{theme ? "dark" : "white"}</Typography>
            <Typography sx={{ color: "custom" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              eos?
            </Typography>
            <Button>Button</Button> */}
              <Header />
              <Box component="main">
                <Toolbar />

                {children}
              </Box>
            </>
          </ThemeProvider>
          <ToastContainer />
        </colorMoodContext.Provider>
      </body>
    </html>
  );
}
