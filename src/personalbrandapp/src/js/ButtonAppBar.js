import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const links = props.links;

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.menuButton} style={{ color: "#DDA15E" }}>
            <Link href={"/"} color="inherit">
              {"Benjamin Yu"}
            </Link>
          </Typography>
          {links.map((link) => (
            <Typography variant="h6" className={classes.menuButton} style={{ color: "#A78A7F" }}>
              <Link href={link.href} color="inherit">
                {link.name}
              </Link>
            </Typography>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
}