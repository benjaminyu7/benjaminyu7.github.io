import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@mui/styles";
import { getPost, getPosts } from "./WordPressProxy";
import MarkdownBlog from "./MarkdownBlog";
import { ListItemButton as Button } from "@mui/material";
import { Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Box from "@mui/material/Box";
import clsx from "clsx";
import BlogPost from "./BlogPost"

const styles = (theme) => ({});
const drawerWidth = 300;

/*
 * @blogposts the filename of the blogpost
 */
class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      blogpost: [], 
      open: false 
    };
    this.classes = this.props;
  }

  async openPost(postId) {
    let post = await getPost(postId);
    this.updatePost(post.title, post.content);
  }

  updatePost(title, content) {
    this.setState({
      post: (
        <>
          <BlogPost title={title} content={content}/>
        </>
      ),
    });
  }

  openDeprecatedBlog() {
    this.setState({
      post: (
        <div>
          <h1>Archive</h1>
          <MarkdownBlog blogposts={this.props.blogposts} />
        </div>
      ),
    });
  }

  updateDropdown(dropdownJson) {
    let dropdownList = [];
    dropdownJson.posts.forEach((item) => {
      dropdownList.push(
        <Button variant="contained" onClick={() => this.openPost(item.ID)}>
          {item.title}
        </Button>
      );
    });
    dropdownList.push(
      <Button variant="contained" onClick={() => this.openDeprecatedBlog()}>
        {"Archive"}
      </Button>
    );
    this.setState({ dropdown: dropdownList });
  }

  toggleDrawer = (open) => (event) => {
    this.setState({ open });
  };

  async componentDidMount() {
    let getPostsResponse = await getPosts();
    this.updateDropdown(getPostsResponse);
    this.openPost(getPostsResponse.posts[0].ID);
  }

  render() {
    const { classes } = this.props;
    return (
      <div style={{height:"100%", overflow:"scroll"}}>
        <IconButton 
          onClick={this.toggleDrawer(true)}
          style={{
            position: 'absolute',
            top: 64,
            right: 0,
            width: '50px',
            height: '50px',
            borderRadius: '0',
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          className={clsx(classes.drawer)}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          anchor="right"
          open={this.state.open}
          onClose={this.toggleDrawer(false)}
          variant="modal"
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            {this.state.dropdown}
          </div>
        </Drawer>
        <Box style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
          {this.state.post}
        </Box>
      </div>
    );
  }
}

Blog.propTypes = {
  blogposts: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blog);
