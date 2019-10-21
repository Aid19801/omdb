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
  },
  card: {
    display: 'flex',
    height: 160,
    width: '100%',
    boxShadow: '0 3px 5px 2px lightgrey',
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
    // transform: 'skewY(-2deg)'
    clipPath: 'polygon(0 0, 100% 0, 69% 100%, 0% 100%)'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

export default function MediaControlCard() {
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <Grid item xs={4} className={classes.grid}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cover}
          image="https://media.npr.org/assets/img/2015/05/18/sky025aa_wide-f84a8fa0f800fdd253382382226676fe7a9f00e9.jpg?s=1400"
          title="reuseable card cutting action"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <div className="flex-col space-between h-100">
              <div className="flex-col">
                <p className="headingfont primary margin-on">Heading</p>
                <p className="bodyfont grey margin-on">Subtitle</p>
              </div>
              <p className="headingfont secondary left margin-on">Callout</p>
            </div>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
}
