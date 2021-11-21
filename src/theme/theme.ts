/* eslint-disable no-unused-vars */
import { pickersDayClasses } from '@mui/lab';
import { checkboxClasses, outlinedInputClasses, radioClasses } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import './font.css';

declare module '@mui/material/styles' {
  interface Theme {
    shape: {
      cardRadius: number;
      borderRadius: number;
    };
    decoration: {
      glow: {
        primary: string;
        secondary: string;
        warning: string;
        error: string;
        success: string;
        info: string;
      };
      glowFilter: {
        primary: string;
        secondary: string;
        warning: string;
        error: string;
        success: string;
        info: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    shape?: {
      cardRadius?: number;
      borderRadius?: number;
    };
    decoration?: {
      glow?: {
        primary?: string;
        secondary?: string;
        warning?: string;
        error?: string;
        success?: string;
        info?: string;
      };
      glowFilter?: {
        primary?: string;
        secondary?: string;
        warning?: string;
        error?: string;
        success?: string;
        info?: string;
      };
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
    },
  },
  shape: {
    borderRadius: 8,
    cardRadius: 8,
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    h1: {
      fontFamily: "'Raleway', sans-serif",
      fontWeight: 600,
      fontSize: '4.5rem',
    },
    h2: {
      fontFamily: "'Raleway', sans-serif",
      fontWeight: 600,
      fontSize: '3.5rem',
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
    },
  },
});

theme = createTheme(theme, {
  decoration: {
    glow: {
      primary: `0 0 4px ${theme.palette.primary.light}`,
      seconday: `0 0 4px ${theme.palette.secondary.light}`,
      warning: `0 0 4px ${theme.palette.warning.light}`,
      error: `0 0 4px ${theme.palette.error.light}`,
      success: `0 0 4px ${theme.palette.success.light}`,
      info: `0 0 4px ${theme.palette.info.light}`,
    },
    glowFilter: {
      primary: `drop-shadow(0 0 8px ${theme.palette.primary.light});`,
      seconday: `drop-shadow(0 0 8px ${theme.palette.secondary.light});`,
      warning: `drop-shadow(0 0 8px ${theme.palette.warning.light});`,
      error: `drop-shadow(0 0 8px ${theme.palette.error.light});`,
      success: `drop-shadow(0 0 8px ${theme.palette.success.light});`,
      info: `drop-shadow(0 0 8px ${theme.palette.info.light});`,
    },
  },
});

theme = createTheme(theme, {
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        color: 'secondary',
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.cardRadius,
        },
      },
      defaultProps: {
        elevation: 4,
      },
    },
    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          shrink: true,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        multiline: { padding: '0' },
        input: {
          padding: '10px 14px',
        },
        root: {
          [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
            borderWidth: 1,
            boxShadow: theme.decoration.glow.primary,
          },
          [`&.${outlinedInputClasses.focused}.${outlinedInputClasses.error} .${outlinedInputClasses.notchedOutline}`]:
            {
              boxShadow: theme.decoration.glow.error,
            },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          [`&.${checkboxClasses.checked}`]: {
            filter: theme.decoration.glowFilter.primary,
          },
        },
      },
    },
    MuiRadio: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          [`&.${radioClasses.checked}`]: {
            filter: theme.decoration.glowFilter.primary,
          },
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          [`&:focus.${pickersDayClasses.selected}`]: {
            backgroundColor: theme.palette.secondary.light,
          },
          [`&.${pickersDayClasses.selected}`]: {
            backgroundColor: theme.palette.secondary.main,
          },
          [`&.${pickersDayClasses.selected}:hover`]: {
            backgroundColor: theme.palette.secondary.light,
          },
        },
      },
    },
  },
});

export default createTheme(theme);
