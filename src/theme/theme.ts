import { pickersDayClasses } from '@mui/lab';
import { checkboxClasses, outlinedInputClasses, radioClasses } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import './font.css';
import { generate } from './newShadows';

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
  shadows: [
    'none',
    '0px 5px 15px rgba(243, 243, 243, 0.45),0px 2px 10px rgba(24, 24, 43, 0.01),0px 2px 16px rgba(0, 0, 0, 0.02)',
    '0px 5.1px 15.3px rgba(243, 243, 243, 0.4391),0px 2.2px 9.8px rgba(24, 24, 43, 0.0209),0px 2px 16.3px rgba(0, 0, 0, 0.0309)',
    '0px 5.2px 15.7px rgba(243, 243, 243, 0.4283),0px 2.3px 9.6px rgba(24, 24, 43, 0.0317),0px 2px 16.7px rgba(0, 0, 0, 0.0417)',
    '0px 5.3px 16px rgba(243, 243, 243, 0.4174),0px 2.5px 9.3px rgba(24, 24, 43, 0.0426),0px 2px 17px rgba(0, 0, 0, 0.0526)',
    '0px 5.3px 16.4px rgba(243, 243, 243, 0.4065),0px 2.7px 9.1px rgba(24, 24, 43, 0.0535),0px 2px 17.4px rgba(0, 0, 0, 0.0635)',
    '0px 5.4px 16.7px rgba(243, 243, 243, 0.3957),0px 2.9px 8.9px rgba(24, 24, 43, 0.0643),0px 2.1px 17.7px rgba(0, 0, 0, 0.0743)',
    '0px 5.5px 17.1px rgba(243, 243, 243, 0.3848),0px 3px 8.7px rgba(24, 24, 43, 0.0752),0px 2.1px 18.1px rgba(0, 0, 0, 0.0852)',
    '0px 5.6px 17.4px rgba(243, 243, 243, 0.3739),0px 3.2px 8.5px rgba(24, 24, 43, 0.0861),0px 2.1px 18.4px rgba(0, 0, 0, 0.0961)',
    '0px 5.7px 17.8px rgba(243, 243, 243, 0.363),0px 3.4px 8.3px rgba(24, 24, 43, 0.097),0px 2.1px 18.8px rgba(0, 0, 0, 0.107)',
    '0px 5.8px 18.1px rgba(243, 243, 243, 0.3522),0px 3.6px 8px rgba(24, 24, 43, 0.1078),0px 2.1px 19.1px rgba(0, 0, 0, 0.1178)',
    '0px 5.9px 18.5px rgba(243, 243, 243, 0.3413),0px 3.7px 7.8px rgba(24, 24, 43, 0.1187),0px 2.1px 19.5px rgba(0, 0, 0, 0.1287)',
    '0px 6px 18.8px rgba(243, 243, 243, 0.3304),0px 3.9px 7.6px rgba(24, 24, 43, 0.1296),0px 2.1px 19.8px rgba(0, 0, 0, 0.1396)',
    '0px 6px 19.2px rgba(243, 243, 243, 0.3196),0px 4.1px 7.4px rgba(24, 24, 43, 0.1404),0px 2.1px 20.2px rgba(0, 0, 0, 0.1504)',
    '0px 6.1px 19.5px rgba(243, 243, 243, 0.3087),0px 4.3px 7.2px rgba(24, 24, 43, 0.1513),0px 2.1px 20.5px rgba(0, 0, 0, 0.1613)',
    '0px 6.2px 19.9px rgba(243, 243, 243, 0.2978),0px 4.4px 7px rgba(24, 24, 43, 0.1622),0px 2.2px 20.9px rgba(0, 0, 0, 0.1722)',
    '0px 6.3px 20.2px rgba(243, 243, 243, 0.287),0px 4.6px 6.7px rgba(24, 24, 43, 0.173),0px 2.2px 21.2px rgba(0, 0, 0, 0.183)',
    '0px 6.4px 20.6px rgba(243, 243, 243, 0.2761),0px 4.8px 6.5px rgba(24, 24, 43, 0.1839),0px 2.2px 21.6px rgba(0, 0, 0, 0.1939)',
    '0px 6.5px 20.9px rgba(243, 243, 243, 0.2652),0px 5px 6.3px rgba(24, 24, 43, 0.1948),0px 2.2px 21.9px rgba(0, 0, 0, 0.2048)',
    '0px 6.6px 21.3px rgba(243, 243, 243, 0.2543),0px 5.1px 6.1px rgba(24, 24, 43, 0.2057),0px 2.2px 22.3px rgba(0, 0, 0, 0.2157)',
    '0px 6.7px 21.6px rgba(243, 243, 243, 0.2435),0px 5.3px 5.9px rgba(24, 24, 43, 0.2165),0px 2.2px 22.6px rgba(0, 0, 0, 0.2265)',
    '0px 6.7px 22px rgba(243, 243, 243, 0.2326),0px 5.5px 5.7px rgba(24, 24, 43, 0.2274),0px 2.2px 23px rgba(0, 0, 0, 0.2374)',
    '0px 6.8px 22.3px rgba(243, 243, 243, 0.2217),0px 5.7px 5.4px rgba(24, 24, 43, 0.2383),0px 2.2px 23.3px rgba(0, 0, 0, 0.2483)',
    '0px 6.9px 22.7px rgba(243, 243, 243, 0.2109),0px 5.8px 5.2px rgba(24, 24, 43, 0.2491),0px 2.2px 23.7px rgba(0, 0, 0, 0.2591)',
    '0px 7px 23px rgba(243, 243, 243, 0.2),0px 6px 5px rgba(24, 24, 43, 0.26),0px 2.3px 24px rgba(0, 0, 0, 0.27)',
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
