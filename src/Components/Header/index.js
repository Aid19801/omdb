import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import './styles.css';

const useStyles = makeStyles({
  root: {
    boxShadow: '0 3px 5px 2px lightgrey',
    padding: '20px'
  }
});

function Header() {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card className={classes.root}>
          <div className="header__container flex-col">
            <p className="headingfont primary margin-off">hey</p>
            <p className="headingfont secondary margin-off">cinema</p>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Header;
