import React from "react";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    paddingRight: theme.spacing(2),
  },
  root: {
    background: '#292F36',
    display: 'flex',
    width: '100%',
    position: 'fixed',
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const links = props.links;

  return (
    <div>
      <AppBar className={classes.root} position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            className={classes.menuButton}
          >
            <Link href={"/"} color="inherit" style={{ textDecoration: 'none' }}>
              {"Benjamin Yu"}
            </Link>
          </Typography>
          {links.map((link) => (
            <Typography
              variant="h6"
              className={classes.menuButton}
              style={{ textDecoration: 'none' }}
            >
              <Link href={link.href} color="inherit" style={{ textDecoration: 'none' }}>
                {link.name}
              </Link>
            </Typography>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
}
