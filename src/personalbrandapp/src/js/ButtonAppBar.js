import React from "react";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from '@mui/material/Button';
import { Container } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  root: {
    background: '#292F36',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const links = props.links;

  return (
    <div>
      <AppBar position='relative' className={classes.root}>
        <Toolbar style={{justifyContent: 'space-between'}}>
          <Container>
            <Button
              key="/"
              variant="text"
              size="large"
              className={classes.menuButton}
              href="/"
              color="inherit"
              style={{ textDecoration: 'none', margin: 10 }}
            >
              {"Benjamin Yu"}
            </Button>
            {links.map((link) => (
              <Button
                key={link.href}
                variant="text"
                size="large"
                className={classes.menuButton}
                href={link.href}
                color="inherit"
                style={{ textDecoration: 'none', margin: 10 }}
              >
                {link.name}
              </Button>
            ))}
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}
