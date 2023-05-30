import React, { Component } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PersonalBrandApp from "./js/PersonalBrandApp";

const theme = createTheme({
  palette: {
    primary: { main: "#292F36" }, //gunmetal
    secondary: { main: "#629460" }, //russian green
    type: "light",
  },
  typography: { useNextVariants: true },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "blog",
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <PersonalBrandApp />
      </ThemeProvider>
    );
  }
}

export default App;
