import React from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const useStyles = makeStyles(theme => ({
  menuButton: {
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(0)
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