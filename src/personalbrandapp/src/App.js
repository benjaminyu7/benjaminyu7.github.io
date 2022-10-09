import React, {Component} from 'react';
import Blog from './js/blog/Blog';
import ButtonAppBar from './js/ButtonAppBar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import BLOGPOST from './blogposts/blogpost.json';
import { withStyles } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: { main: '#292F36' }, //gunmetal
    secondary: { main: '#629460' }, //russian green
    type: 'light',
  },
  typography: { useNextVariants: true },
});

const styles = theme => ({
  headerSpace: {
    ...theme.typography.body2,
    paddingTop: theme.spacing(10),
  },
  background: {
    backgroundColor: '#629460', //russian green
    minHeight: '100vh',
    padding: theme.spacing(3),
  }
});

class App extends Component {


  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.background}>
        <MuiThemeProvider theme={theme}>
          <ButtonAppBar />
          <div className={classes.headerSpace}/>
          <Container>
            <Grid item  xs={12} md={12}>
              <Blog blogposts={BLOGPOST} />
            </Grid>
          </Container>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(App);
