import React, {Component} from 'react';
import Blog from './js/blog/Blog';
import ButtonAppBar from './js/ButtonAppBar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import BLOGPOST from './blogposts/blogpost.json';
import { withStyles } from '@material-ui/core/styles';
import AboutMePage from './js/page/AboutMePage'
import { Outlet, HashRouter as Router, Routes, Route } from "react-router-dom";

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
    this.state = {
      page: "blog"
    }
  }

  render() {
    const { classes } = this.props;
    let links = [
      { name: 'Technical Communication', href: '/technicalWriting.html' },
      { name: 'Blog', href: '#/blog' },
      { name: 'Contact Me', href: '#/contact' },
    ];

    return (
      <div className={classes.background}>
        <MuiThemeProvider theme={theme}>
          <Router>
            <ButtonAppBar links={links} />
            <div className={classes.headerSpace}/>
            <Routes>
              <Route path = "/" component = { <> <Outlet/> </> }>
                <Route path="blog" element={<Container>
                  <Grid item  xs={12} md={12}>
                    <Blog blogposts={BLOGPOST} />
                  </Grid>
                </Container>} />
                <Route path="contact" element={<AboutMePage/>} />
              </Route>
            </Routes>
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(App);
