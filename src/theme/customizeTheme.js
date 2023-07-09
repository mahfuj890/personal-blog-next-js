import { orange } from "@mui/material/colors";
import { createTheme, useTheme } from "@mui/material";

//For Breakpoints
const theme = createTheme();

const customizeTheme = createTheme(theme, {
  status: {
    danger: orange[500],
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#53c28b",
    },
    whiteColor: {
      main: "#fffff",
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    formLabel: {
      fontWeight: 500,
      fontSize: " 14px",
      lineHeight: "20px",
      color: "#0D0C11",
      marginBottom: "8px",
    },
    formLabelSmall: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "-0.01em",
      color: " #80899A",
      marginBottom: "8px",
    },
    formTitle: {
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "24px",
      color: "#0D0C11",
      marginBottom: "15px",
    },
    heroTitle: {
      fontWeight: 600,
      fontSize: "72px",
      background: "linear-gradient(to bottom, #194c33, #bbb)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      [theme.breakpoints.between("lg", "xl")]: {
        fontSize: "50px",
      },
      [theme.breakpoints.between("md", "lg")]: {
        fontSize: "44px",
      },
      [theme.breakpoints.between("sm", "md")]: {
        fontSize: "36px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "32px",
      },
    },
    aboutTitle: {
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "24px",
      color: "#0D0C11",
      [theme.breakpoints.between("md", "lg")]: {
        fontSize: "22px",
      },

      [theme.breakpoints.down("md")]: {
        fontSize: "20px",
      },
    },
    heroPara: {
      fontWeight: 400,
      fontSize: "24px",
      color: "#31384A",
      [theme.breakpoints.between("sm", "md")]: {
        fontSize: "20px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "18px",
      },
    },
    aboutPara: {
      fontWeight: 400,
      fontSize: "18px",
      color: "#31384A",

      [theme.breakpoints.down("sm")]: {
        fontSize: "18px",
      },
    },
    contactTitle: {
      fontWeight: 600,
      fontSize: "60px",
      [theme.breakpoints.between("lg", "xl")]: {
        fontSize: "45px",
      },
      [theme.breakpoints.between("md", "lg")]: {
        fontSize: "36px",
      },
      [theme.breakpoints.between("sm", "md")]: {
        fontSize: "32px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "26px",
      },
    },
    portfolioTitle: {
      fontWeight: 800,
      fontSize: "80px",
      [theme.breakpoints.between("lg", "xl")]: {
        fontSize: "55px",
      },
      [theme.breakpoints.between("md", "lg")]: {
        fontSize: "45px",
      },
      [theme.breakpoints.between("sm", "md")]: {
        fontSize: "38px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "32px",
      },
    },
  },

  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          formLabel: "h4",
          formLabelSmall: "h6",
          formTitle: "h3",
          heroTitle: "h1",
          aboutTitle: "h3",
          contactTitle: "h3",
          portfolioTitle: "h3",
          heroPara: "p",
          aboutPara: "p",
        },
      },
    },

    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#6b6b6b #2b2b2b",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#091c23",
            width: "5px",
            height: "5px",
            borderRadius: 8,
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#4FB5E5",
            minHeight: 24,
            border: "1px solid #2b2b2b",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: "#26c3e7",
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: "#26c3e7",
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: "#26c3e7",
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#26c3e7",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
          ".MuiInputBase-root": {
            minHeight: "44px",
            borderRadius: "8px",
            fontWeight: 400,
            fontSize: "16px",
            color: "#0D0C11",
            border: "1px solid #53c28b",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "&.MuiInputBase-root": {
            height: "44px",
            borderRadius: "8px",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.MuiInputBase-root": {
            height: "44px",
            borderRadius: "8px",
          },
          "&:not(.Mui-checked).MuiButtonBase-root": {
            color: "#A6ACB8",
          },
        },
      },
    },
    MuiStack: {
      styleOverrides: {
        root: {
          "&.MuiStack-root": {
            alignItems: "center",
            flexDirection: "row",
            flexWrap: "wrap",
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          ".MuiTypography-root": {
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "20px",
            color: "#31384A",
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "white",
          color: "#31384A",
          border: "1px solid #dadde9",
          ".MuiTooltip-arrow": {
            color: "#f1f1f1",
          },
        },
      },
    },
  },
});
// customizeTheme.typography.modalTitle = {
//   fontSize: '1.2rem',
//   '@media (min-width:600px)': {
//     fontSize: '2.5rem',
//   },
//   [customizeTheme.breakpoints.up('md')]: {
//     fontSize: '2.4rem',
//   },
// };
export const drawerWidth = 256;
export const windowBreak = 960;
export const mobileBreak = 600;

export default customizeTheme;
