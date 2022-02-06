import { pickersDayClasses } from '@mui/lab';
import { checkboxClasses, outlinedInputClasses, radioClasses } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import './font.css';

declare module '@mui/material/styles' {
  interface PaletteColor {
    alt: string;
  }

  interface SimplePaletteColorOptions {
    alt?: string;
  }

  interface Palette {
    primary: PaletteColor;
    secondary: PaletteColor;
  }

  interface Theme {
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
  interface ThemeOptions {
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
      main: '#20A598',
      light: '#A9D4D0',
      dark: '#157A70',
      contrastText: '#FFF',
      alt: '#6BDDCA',
    },
    secondary: {
      main: '#29302F',
      contrastText: '#FFF',
      alt: '#42625D',
    },
    error: {
      main: '#F25642',
      contrastText: '#FFF',
      alt: '#FC8653',
    },
    warning: {
      main: '#EC930E',
      contrastText: '#FFF',
      alt: '#FBC91A',
    },
    success: {
      main: '#31CA6E',
      contrastText: '#FFF',
      alt: '#8AE056',
    },
    info: {
      main: '#20BFE2',
      contrastText: '#FFF',
      alt: '#2091E2',
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
  },
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    h1: {
      fontFamily: "'Raleway', sans-serif",
      fontWeight: 800,
      fontSize: '5rem',
    },
    h2: {
      fontFamily: "'Raleway', sans-serif",
      fontWeight: 800,
    },
    h3: {
      fontFamily: "'Raleway', sans-serif",
      fontWeight: 800,
    },
    h4: {
      fontFamily: "'Raleway', sans-serif",
      fontWeight: 700,
    },
    h5: {
      fontFamily: "'Raleway', sans-serif",
      fontWeight: 700,
    },
    h6: {
      fontFamily: "'Raleway', sans-serif",
      fontWeight: 700,
    },
    button: {
      fontWeight: 500,
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
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
        sizeSmall: {
          fontWeight: 500,
        },
        sizeMedium: {
          padding: `${theme.spacing(1.25)} ${theme.spacing(2)}`,
        },
        sizeLarge: {
          padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
        },
        containedPrimary: {
          background: `linear-gradient(-22.5deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.alt} 100%)`,
        },
      },
      defaultProps: {
        disableElevation: true,
        color: 'secondary',
      },
    },
    MuiCard: {
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

theme = responsiveFontSizes(theme);

export default createTheme(theme);
