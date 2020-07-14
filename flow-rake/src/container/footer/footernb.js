import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { Divider } from '@material-ui/core';


const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

function Footernb(props) {
    const { classes } = props;
    return (
      <div className="App-footernav">
        <Link to= "/Privacy">
        <Button /*color="primary"*/ className={classes.button}>
          Privacy
        </Button>        
        </Link> 
      </div>
    );
  }
  
  Footernb.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Footernb);
