import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import WhiteSpace from './whitespace.png';

const styles = theme => ({
  card: {
    display: 'flex',
    width: 850
  },
  details: {
    width: 550,
    height: 150,
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 150,
    height: 150,
  }
});

function ServiceCard2(props) {
  const { classes, theme } = props;

  return (
    <Card className={classes.card}>
    <CardMedia
      className={classes.cover}
      image = {WhiteSpace}
      /> 
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="headline">{props.PrimaryText}</Typography>
          <Typography variant="subheading" color="textSecondary">
          {props.SecondaryText}<br></br>{props.ThirdText}<br></br>{props.FourText}<br></br>{props.FifthText}
          </Typography>
        </CardContent>
      </div>   
      <CardMedia
        className={classes.cover}
        image={props.ImagePath}
        title={props.ImageTitle}
      />   
    </Card>
  );
}

ServiceCard2.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ServiceCard2);