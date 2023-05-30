import React, { Component } from "react";

import Card from "@mui/material/Card";
import Markdown from "../Markdown";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";

const styles = (theme) => ({
  card: {
    margin: theme.spacing(3),
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3),
    margin: 0,
    backgroundColor: "#E5F4E3", //honey dew
  },
});

/*
 * @text the markdown of the blogpost
 */
class BlogPost extends Component {
  render() {
    const { classes } = this.props;
    let date = "";
    if (undefined !== this.props.date) {
      date = this.props.date;
    }
    return (
      <Card className={classes.card}>
        <Markdown className={classes.markdown}>
          {this.props.text + date}
        </Markdown>
      </Card>
    );
  }
}

BlogPost.propTypes = {
  text: PropTypes.string.isRequired,
};

export default withStyles(styles)(BlogPost);
