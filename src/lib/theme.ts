import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0070f3"
    },
    secondary: {
      main: "#19857b"
    }
  },
  typography: {
    fontFamily: `"Roboto", -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
    h1: {
      fontFamily: `"Montserrat", Verdana, Geneva, Tahoma, sans-serif`
    }
  }
});

export default theme;
