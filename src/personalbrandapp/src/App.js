import React, {Component} from 'react';
import ButtonAppBar from './ButtonAppBar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Markdown from './Markdown';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import BLOGPOST from './blogpost.json';
import aboutme from './aboutme.md';
import { withStyles } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: { main: '#c6ebc6' }, //light green
    secondary: { main: '#FFF8EF' }, //tan
    type: 'light',
  },
  typography: { useNextVariants: true },
});

const styles = theme => ({
  markdown: {
    ...theme.typography.body2,
    paddingTop: theme.spacing(10),
  },
});

class App extends Component {


  constructor(props) {
    super(props);
    this.state = { blogpost: []};
  }

  componentDidMount() {
    const { classes } = this.props;
    for (var index in BLOGPOST.filename) {
      fetch("/" + BLOGPOST.filename[index]).then((response) => response.text())
        .then(text => {
          console.log(this.state.blogpost);
          this.setState({blogpost: this.state.blogpost.concat(
            <Markdown className={classes.markdown}>
              {text}
            </Markdown>
          )})})
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <ButtonAppBar />
          <Container>
            <Grid item  xs={12} md={12}>
              {this.state.blogpost}
            </Grid>
          </Container>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(App);
