import React from 'react';
import { Card } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  card: {
    display: 'flex',
    width: 830,
    flexDirection: 'column',
    padding: 10,
  }  
});

function Careers(props) {
  const { classes, theme } = props;
    return (
      <Card className={classes.card}>
        <div>
            Current job openings will be posted here. <br/> <br/>
            Please feel free to send your resume to <a href="mailto:info@novelcath.com?subject=Resume%20Submitted%20">info@novelcath.com</a> <br /> <br/>
            Thank you for your interest! <br/>            
        </div>
        </Card>
    );
}

Careers.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(Careers);
