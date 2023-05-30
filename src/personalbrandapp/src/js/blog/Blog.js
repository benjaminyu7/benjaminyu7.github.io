import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@mui/styles';
import { getPost, getPosts } from './WordPressProxy'
import MarkdownBlog from './MarkdownBlog'
import { ListItemButton as Button } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import clsx from 'clsx';
import Card from '@mui/material/Card';

const styles = theme => ({ });
const drawerWidth = 300;

/*
* @blogposts the filename of the blogpost
*/
class Blog extends Component {

  constructor(props) {
    super(props);
    this.state = { blogpost: []};
    this.classes = this.props;
  }

  async openPost(postId) {
    let post = await getPost(postId)
    this.updatePost(post.title, post.content)
  }

  updatePost(title, content) {
    this.setState({post: (<><h1>{title}</h1><div style={{backgroundColor:'#E5F4E3', width: '100', padding:20, objectFit: 'contain', overflow: 'hidden'}} 
                               dangerouslySetInnerHTML={{ __html: content }} /></>)})
  }

  openDeprecatedBlog() {
      this.setState({post: (<><h1>Archive</h1><MarkdownBlog blogposts={this.props.blogposts} /></>)})
  }

  updateDropdown(dropdownJson) {
    let dropdownList = []
    dropdownJson.posts.forEach(item => {
      dropdownList.push(<Button  variant="contained" onClick={() => this.openPost(item.ID)}>
        {item.title}
      </Button>)
    })
    dropdownList.push(<Button variant="contained" onClick={() => this.openDeprecatedBlog()}>
      {'Archive'}
    </Button>)
    this.setState({dropdown: dropdownList})
  }

  async componentDidMount() {
    let posts = await getPosts()
    this.updateDropdown(posts)
    this.openDeprecatedBlog()
  }

  render() {
    const { classes } = this.props;
    return ( 
      <div>
        <Drawer
          className={clsx(classes.drawer)}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: '#292F36',
              color: '#A78A7F',
            },
          }}
          variant="permanent"
          anchor="right"
        >
          <div style={{ display: 'flex', flexDirection: 'column'}}>
            {this.state.dropdown}
          </div>
        </Drawer>
        <Box sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
          <Card style={{backgroundColor:'#E5F4E3', padding:20, objectFit: 'contain', overflow: 'hidden'}}>
              {this.state.post}
          </Card>
        </Box>
      </div>
    );
  }
}

Blog.propTypes = {
    blogposts: PropTypes.object.isRequired,
}

export default withStyles(styles)(Blog);