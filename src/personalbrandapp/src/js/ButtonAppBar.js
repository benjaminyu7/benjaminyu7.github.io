import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title} style={{ color: "#DDA15E" }}>
            <Link href="/"  color="inherit">
              Benjamin Yu
            </Link>
          </Typography>
          <Typography variant="h6" className={classes.title} style={{ color: "#A78A7F" }}>
            Blog
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}