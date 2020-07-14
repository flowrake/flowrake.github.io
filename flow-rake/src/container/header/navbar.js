import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { colors } from '@material-ui/core';



const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function Navbar(props) {
  const { classes } = props;
  return (
    <div className="App-navbar">
      <Link to="/Home">
        <Button className={classes.button}>
          Home
        </Button>
      </Link>
      |
        {/* <Link  to= "/Services">
        <Button className={classes.button}>
          Specialty
        </Button>
        </Link>
        | */}
      {/*<Link  to= "/AboutUs">
        <Button className={classes.button}>
          Meet the Team
        </Button>
        </Link>
    |*/}
      {/* <Link  to= "/Careers">
        <Button className={classes.button}>
          Careers
        </Button>   
        </Link>
        | */}
      <Link to="/ContactUs">
        <Button className={classes.button}>
          Contact Us
        </Button>
      </Link>

    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
