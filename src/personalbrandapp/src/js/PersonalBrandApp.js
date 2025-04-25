import React, { Component } from "react";
import Blog from "./blog/Blog";
import ButtonAppBar from "./ButtonAppBar";
import BLOGPOST from "../blogposts/blogpost.json";
import { withStyles } from "@mui/styles";
import AboutMePage from "./page/AboutMePage";
import { Outlet, HashRouter as Router, Routes, Route } from "react-router-dom";
import ResumePage from "./page/ResumePage";
import resume from "./resume/resume.json";import NotionProxy from "./blog/NotionProxy";
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
      { name: "Cinematic Playlist", href: "#/cinematic" },
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
                element={<ResumePage data={resume} />}
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
              <Route path="cinematic" element={<div style={{ display: 'flex', height: '100%' }}><iframe width="100%" height="100%" src="https://www.youtube.com/embed/videoseries?si=sSBXKn0vMU3bcFO7&amp;list=PL3FWdJvhPq0FZcBZQ2r2VJgZW3BLH0yVg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>} />
            </Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(PersonalBrandApp);

