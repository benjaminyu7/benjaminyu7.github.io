
import React, {Component} from 'react';
import Blog from './blog/Blog';
import ButtonAppBar from './ButtonAppBar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import BLOGPOST from '../blogposts/blogpost.json';
import { withStyles } from '@mui/styles';
import AboutMePage from './page/AboutMePage'
import { Outlet, HashRouter as Router, Routes, Route } from "react-router-dom";

const styles = theme => ({
  headerSpace: {
    paddingTop: theme.spacing(10),
  },
  background: {
    backgroundColor: '#629460', //russian green
    minHeight: '100vh',
    padding: theme.spacing(3),
  }
});

class PersonalBrandApp extends Component {

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
    </div>
    );
  }
}

export default withStyles(styles)(PersonalBrandApp);
