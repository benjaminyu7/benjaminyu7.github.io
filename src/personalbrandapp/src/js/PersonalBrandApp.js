import React, { Component } from "react";
import Blog from "./blog/Blog";
import ButtonAppBar from "./ButtonAppBar";
import BLOGPOST from "../blogposts/blogpost.json";
import { withStyles } from "@mui/styles";
import AboutMePage from "./page/AboutMePage";
import { Outlet, HashRouter as Router, Routes, Route } from "react-router-dom";

const styles = (theme) => ({
  headerSpace: {
    paddingTop: theme.spacing(10),
  },
  background: {
    backgroundColor: "#f8f8f8",
    minHeight: "100vh",
  },
});

class PersonalBrandApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "blog",
    };
  }

  render() {
    const { classes } = this.props;
    let links = [
      { name: "Blog", href: "#/blog" },
      { name: "Contact Me", href: "#/contact" },
    ];

    return (
      <div className={classes.background}>
        <Router>
          <ButtonAppBar links={links} theme={this.props.theme}/>
          <div className={classes.headerSpace} />
          <Routes>
            <Route
              path="/"
              component={
                <>
                  <Outlet />
                </>
              }
            >
              <Route
                path="blog"
                element={
                  <Blog  blogposts={BLOGPOST} />
                }
              />
              <Route path="contact" element={<AboutMePage />} />
            </Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(PersonalBrandApp);
