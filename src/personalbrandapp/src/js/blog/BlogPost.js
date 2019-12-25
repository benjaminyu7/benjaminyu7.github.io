import React, {Component} from 'react';

import Card from '@material-ui/core/Card';
import Markdown from '../Markdown';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  card: {
    margin: theme.spacing(3),
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3),
    margin: 0,
    backgroundColor: 'white',
  },
});

/*
* @text the markdown of the blogpost
*/
class BlogPost extends Component {

  render() {
    const { classes } = this.props;
    return ( 
      <Card className={classes.card}>
        <Markdown className={classes.markdown}>
          {this.props.text}
        </Markdown>
      </Card>
    );
  }

}

BlogPost.propTypes = {
    text: PropTypes.string.isRequired,
}

export default withStyles(styles)(BlogPost);