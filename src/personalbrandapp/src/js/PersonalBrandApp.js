import React, { Component } from "react";
import ButtonAppBar from "./ButtonAppBar";
import { withStyles } from "@mui/styles";
import AboutMePage from "./page/AboutMePage";
import { Outlet, HashRouter as Router, Routes, Route } from "react-router-dom";
import ResumePage from "./page/ResumePage";
import resume from "./resume/resume.json";import NotionProxy from "./blog/NotionProxy";
import LandingPage from "./page/LandingPage";
;
const styles = (theme) => ({
  background: {
    backgroundColor: "#f8f8f8",
    height: "100%",
    flexDirection: "column",
    display: 'flex',
    overflowY: 'scroll',
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
      { name: "Resume", href: "#/resume" },
      { name: "Blog", href: "#/blog" },
      { name: "Contact Me", href: "#/contact" },
    ];

    return (
      <div className={classes.background}>
        <Router >
          <ButtonAppBar links={links} theme={this.props.theme}/>
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
                path="/"
                element={<LandingPage />}
              />
              <Route
                path="resume"
                element={<ResumePage data={resume} />}
              />
              <Route
                path="blog"
                element={
                  <NotionProxy />
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

