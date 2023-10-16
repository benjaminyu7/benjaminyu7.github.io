import React, { Component } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PersonalBrandApp from "./js/PersonalBrandApp";

const theme = createTheme({
  palette: {
    primary: { main: "#e3f5e3" }, //gunmetal
    secondary: { main: "#ffffff" }, //russian green
    background: { main: "#f8f8f8" }, //russian green
    type: "light",
  },
  typography: {
    fontFamily: 'Palanquin, sans-serif',
  },
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
