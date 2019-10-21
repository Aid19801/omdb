import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Card } from '../index';
import './styles.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    height: 160,
    padding: 20,
    margin: 20
  },
  card: {
    display: 'flex',
    height: 160,
    width: '100%',
    boxShadow: '0 3px 5px 2px lightgrey'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 151,
    clipPath: 'polygon(0 0, 100% 0, 69% 100%, 0% 100%)'
  }
}));

function Results({ results }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {results &&
          results.length > 0 &&
          results.map((each, i) => {
            return (
              <>
                <Grid item xs={3}>
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

        {(!results || results.length === 0) && <p>Search For A Movie...</p>}
      </Grid>
    </div>
  );
}

export default Results;
