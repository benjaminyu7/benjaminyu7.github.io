import React, {Component} from 'react';

import BlogPost from './BlogPost';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
});

/*
* @blogposts the filename of the blogpost
*/
export class Blog extends Component {

  constructor(props) {
    super(props);
    this.state = { blogpost: []};
  }

  componentDidMount() {
    for (var index in this.props.blogposts.posts) {
      const date = this.props.blogposts.posts[index].date;
      const thisIndex = index;
      fetch("/" + this.props.blogposts.posts[index].filename).then((response) => response.text())
        .then(text => {
          this.setState({blogpost: this.state.blogpost.concat(
            <BlogPost text={text} date={date} key={thisIndex}/>
          )})
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

Blog.propTypes = {
    blogposts: PropTypes.object.isRequired,
}



export default withStyles(styles)(Blog);