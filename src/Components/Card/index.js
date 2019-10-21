import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import './styles.css';

const useStyles = makeStyles(theme => ({
  grid: {
    height: 160,
    padding: 20,
    margin: 20,
    minWidth: 450,
    maxWidth: 450,
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
  },
}));

function ReUseableCard({ heading, subheading, img, callout }) {
  const classes = useStyles();

  return (
    <Grid id="card__fade-in" item xs={12} className={classes.grid}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image={img}
          src={img}
          title="reuseable card cutting action"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <div className="flex-col space-between h-100">
              <div className="flex-col">
                <p className="headingfont primary margin-on">{heading}</p>
                <p className="bodyfont grey margin-on">{subheading}</p>
              </div>
              <p className="headingfont secondary left margin-on">{callout}</p>
            </div>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
}

export default ReUseableCard;