import { createTheme } from '@mui/material/styles';
import './font.css'
import generateShadows from "./shadows";

declare module '@mui/material/styles' {
  interface Shape {
    surfaceRadius: number | string;
    buttonRadius: number | string;
  }

  interface Theme {
    shape: {
      surfaceRadius: number | string;
      buttonRadius: number | string;
    };
  }

  interface ThemeOptions {
    shape?: {
      surfaceRadius?: number | string;
      buttonRadius?: number | string;
    };
  }
}

let theme = createTheme({
  palette: {
      primary: {
        main: '#28C6C6',
        contrastText: '#fff',
      },
      secondary: {
        main: '#29302F',
        contrastText: '#fff',
      },
      background: {
        default: '#FCFDFD',
      },
      text: {
        primary: '#505858',
        secondary: '#5D6B6A',
        disabled: '#B5BFBE',
      }
    },
    shape: {
      buttonRadius: 4,
      surfaceRadius: 8,
    },
    typography: {
      fontFamily: "'Open Sans', sans-serif",
      h1: {
        fontFamily: "'Raleway', sans-serif",
        fontWeight: 400,
      },
      h3: {
        fontFamily: "'Raleway', sans-serif",
        fontWeight: 600,
        fontSize: '2.5rem',
      },
      h4: {
        fontFamily: "'Raleway', sans-serif",
        fontWeight: 600,
        fontSize: '2rem',
      },
      h5: {
        fontFamily: "'Raleway', sans-serif",
        fontWeight: 600,
      },
      h6: {
        fontFamily: "'Raleway', sans-serif",
        fontWeight: 600,
      },
      button: {
        fontWeight: 600,
        textTransform: 'none',
      }
    },
    shadows: generateShadows() as any,
});

theme = createTheme(theme, {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.buttonRadius,
        }
      },
      defaultProps: {
        disableElevation: true,
        color: 'secondary',
      }          
    },
    MuiCard: {
      styleOverrides: {root: {
        borderRadius: theme.shape.surfaceRadius,
      },},
      
      defaultProps: {
        elevation: 4,
      }
    },
    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          shrink: true,
        }
      },
    },
      MuiOutlinedInput: {
      styleOverrides: {input: {
        padding: '12.75px 14px',
      },},
    }
  }
})

export default theme;