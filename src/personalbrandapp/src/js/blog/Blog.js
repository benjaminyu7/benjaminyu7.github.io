import React, {Component} from 'react';

import BlogPost from './BlogPost';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
});

/*
* @blogposts the filename of the blogpost
*/
class Blog extends Component {

  constructor(props) {
    super(props);
    this.state = { blogpost: []};
  }

  componentDidMount() {
    for (var index in this.props.blogposts.filename) {
      fetch("/" + this.props.blogposts.filename[index]).then((response) => response.text())
        .then(text => {
          this.setState({blogpost: this.state.blogpost.concat(
            <BlogPost text={text}/>
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
    blogposts: PropTypes.string.isRequired,
}

export default withStyles(styles)(Blog);