import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import './styles.css';

const useStyles = makeStyles(theme => ({
  grid: {
    height: 160,
    padding: 20,
    margin: 20
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '70%',
    background: 'white'
  }
}));

function SearchInput({ label, onChange }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.grid}>
      <TextField
        id="standard-search"
        label={label}
        onChange={(e) => onChange(e)}
        type="search"
        className={classes.textField}
        margin="normal"
      />
    </Grid>
  );
}

export default SearchInput;
