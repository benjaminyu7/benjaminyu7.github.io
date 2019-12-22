import React, {Component} from 'react';
import ButtonAppBar from './ButtonAppBar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Markdown from './Markdown';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
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
    padding: theme.spacing(10, 0),
  },
});

class App extends Component {


  constructor(props) {
    super(props);
    this.state = { post: ""};
  }

  componentWillMount() {
    fetch(aboutme).then((response)=> response.text())
      .then(text =>{this.setState({post: text})})
  }

  render() {
    console.log(this.aboutme);
    const { classes } = this.props;
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <ButtonAppBar />
          <Container>
            <Grid item  xs={12} md={12}>
              <Markdown className={classes.markdown}>
                {this.state.post}
              </Markdown>
            </Grid>
          </Container>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(App);
