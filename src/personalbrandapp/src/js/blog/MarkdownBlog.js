import React, {Component} from 'react';
import BlogPost from './BlogPost';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';

const styles = theme => ({ });

/*
* @blogposts the filename of the blogpost
*/
export class MarkdownBlog extends Component {

  constructor(props) {
    super(props);
    this.state = { blogpost: []};
  }

  async componentDidMount() {
    let blogposts = []
    for (var index in this.props.blogposts.posts) {
      const date = this.props.blogposts.posts[index].date;
      const thisIndex = index;
      fetch("/" + this.props.blogposts.posts[index].filename).then((response) => response.text())
        .then(text => {
          blogposts[thisIndex] = (<BlogPost text={text} date={date} key={thisIndex}/>)
          this.setState({blogpost: blogposts}); 
        });
    }
  }

  render() {
    const { classes } = this.props;
    return ( 
      <div>
          {this.state.blogpost}
      </div>);
  }
}

MarkdownBlog.propTypes = {
    blogposts: PropTypes.object.isRequired,
}

export default withStyles(styles)(MarkdownBlog);