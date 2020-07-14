import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  card: {
    display: 'flex',
    width: 850,
    height: 150,
    
  },
  details: {
    width: 700,
    height: 150,
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    width: 700,
  },
  cover: {
    display: 'flex-end',
    width: 150,
    height: 150,
  }
});

function AboutUsCard2(props) {
  const { classes, theme } = props;

  return (
    <Card className={classes.card}>    
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="headline">{props.Name}</Typography>
          <Typography variant="subheading" color="textSecondary">
            {props.Details}
          </Typography>
        </CardContent>        
      </div>
      <CardMedia
        className={classes.cover}
        image={props.Image}
        title="Live from space album cover"
      />
      
    </Card>
  );
}

AboutUsCard2.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutUsCard2);