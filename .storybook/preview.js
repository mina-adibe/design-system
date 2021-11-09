import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from 'emotion-theming';
import theme from '../src/theme/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "centered",
};

export const decorators = [
  (Story) => {
    
    console.log(theme)

    return (
    <MuiThemeProvider theme={theme}>
    {/* <ThemeProvider theme={theme}> */}
        <Story />
    {/* </ThemeProvider> */}
    </MuiThemeProvider>
  )},
];
