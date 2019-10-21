import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Card } from '../index';
import './styles.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
  }
}));

function Results({ results }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.gridContainer}>
        {results &&
          results.length > 0 &&
          results.map((each, i) => {
            return (
              <>
                <Grid item className={classes.grid}>
                  <Card
                    key={i}
                    heading={each.Title}
                    subheading={
                      each.Ratings && each.Ratings.length > 0
                        ? each.Ratings[0].Title
                        : 'unrated'
                    }
                    callout={each.Year}
                    img={each.Poster}
                  />
                </Grid>
              </>
            );
          })}

      </Grid>
    </div>
  );
}

export default Results;
