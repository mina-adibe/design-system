import { pickersDayClasses } from '@mui/lab';
import { checkboxClasses, outlinedInputClasses, radioClasses } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

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
  shadows:
    //  generate(),
    [
      'none',
      '0px 10px 25px rgba(12, 24, 24, 0.1),0px 2px 15px rgba(12, 24, 24, 0),0px 2px 20px rgba(12, 24, 24, 0)',
      '0px 10.1px 25.3px rgba(12, 24, 24, 0),0px 2.2px 14.8px rgba(12, 24, 24, 0),0px 2px 20.3px rgba(12, 24, 24, 0.1)',
      '0px 10.2px 25.7px rgba(12, 24, 24, 0),0px 2.3px 14.6px rgba(12, 24, 24, 0.1),0px 2px 20.7px rgba(12, 24, 24, 0.1)',
      '0px 10.3px 26px rgba(12, 24, 24, 0),0px 2.5px 14.3px rgba(12, 24, 24, 0.1),0px 2px 21px rgba(12, 24, 24, 0.1)',
      '0px 10.3px 26.4px rgba(12, 24, 24, 0),0px 2.7px 14.1px rgba(12, 24, 24, 0.1),0px 2px 21.4px rgba(12, 24, 24, 0.1)',
      '0px 10.4px 26.7px rgba(12, 24, 24, 0),0px 2.9px 13.9px rgba(12, 24, 24, 0.1),0px 2.1px 21.7px rgba(12, 24, 24, 0.1)',
      '0px 10.5px 27.1px rgba(12, 24, 24, -0.1),0px 3px 13.7px rgba(12, 24, 24, 0.1),0px 2.1px 22.1px rgba(12, 24, 24, 0.2)',
      '0px 10.6px 27.4px rgba(12, 24, 24, -0.1),0px 3.2px 13.5px rgba(12, 24, 24, 0.2),0px 2.1px 22.4px rgba(12, 24, 24, 0.2)',
      '0px 10.7px 27.8px rgba(12, 24, 24, -0.1),0px 3.4px 13.3px rgba(12, 24, 24, 0.2),0px 2.1px 22.8px rgba(12, 24, 24, 0.2)',
      '0px 10.8px 28.1px rgba(12, 24, 24, -0.1),0px 3.6px 13px rgba(12, 24, 24, 0.2),0px 2.1px 23.1px rgba(12, 24, 24, 0.2)',
      '0px 10.9px 28.5px rgba(12, 24, 24, -0.2),0px 3.7px 12.8px rgba(12, 24, 24, 0.2),0px 2.1px 23.5px rgba(12, 24, 24, 0.2)',
      '0px 11px 28.8px rgba(12, 24, 24, -0.2),0px 3.9px 12.6px rgba(12, 24, 24, 0.2),0px 2.1px 23.8px rgba(12, 24, 24, 0.2)',
      '0px 11px 29.2px rgba(12, 24, 24, -0.2),0px 4.1px 12.4px rgba(12, 24, 24, 0.3),0px 2.1px 24.2px rgba(12, 24, 24, 0.3)',
      '0px 11.1px 29.5px rgba(12, 24, 24, -0.2),0px 4.3px 12.2px rgba(12, 24, 24, 0.3),0px 2.1px 24.5px rgba(12, 24, 24, 0.3)',
      '0px 11.2px 29.9px rgba(12, 24, 24, -0.2),0px 4.4px 12px rgba(12, 24, 24, 0.3),0px 2.2px 24.9px rgba(12, 24, 24, 0.3)',
      '0px 11.3px 30.2px rgba(12, 24, 24, -0.3),0px 4.6px 11.7px rgba(12, 24, 24, 0.3),0px 2.2px 25.2px rgba(12, 24, 24, 0.3)',
      '0px 11.4px 30.6px rgba(12, 24, 24, -0.3),0px 4.8px 11.5px rgba(12, 24, 24, 0.3),0px 2.2px 25.6px rgba(12, 24, 24, 0.3)',
      '0px 11.5px 30.9px rgba(12, 24, 24, -0.3),0px 5px 11.3px rgba(12, 24, 24, 0.4),0px 2.2px 25.9px rgba(12, 24, 24, 0.4)',
      '0px 11.6px 31.3px rgba(12, 24, 24, -0.3),0px 5.1px 11.1px rgba(12, 24, 24, 0.4),0px 2.2px 26.3px rgba(12, 24, 24, 0.4)',
      '0px 11.7px 31.6px rgba(12, 24, 24, -0.4),0px 5.3px 10.9px rgba(12, 24, 24, 0.4),0px 2.2px 26.6px rgba(12, 24, 24, 0.4)',
      '0px 11.7px 32px rgba(12, 24, 24, -0.4),0px 5.5px 10.7px rgba(12, 24, 24, 0.4),0px 2.2px 27px rgba(12, 24, 24, 0.4)',
      '0px 11.8px 32.3px rgba(12, 24, 24, -0.4),0px 5.7px 10.4px rgba(12, 24, 24, 0.4),0px 2.2px 27.3px rgba(12, 24, 24, 0.4)',
      '0px 11.9px 32.7px rgba(12, 24, 24, -0.4),0px 5.8px 10.2px rgba(12, 24, 24, 0.5),0px 2.2px 27.7px rgba(12, 24, 24, 0.5)',
      '0px 12px 33px rgba(12, 24, 24, -0.4),0px 6px 10px rgba(12, 24, 24, 0.5),0px 2.3px 28px rgba(12, 24, 24, 0.5)',
    ],
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
    subtitle2: {
      fontWeight: 600,
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
