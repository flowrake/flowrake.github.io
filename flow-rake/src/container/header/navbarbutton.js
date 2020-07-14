import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Navbarbutton = (props) => {
    return (
      <div className="App-navbutton">
        <Link to= {props.linkName}>
          <Button >
           {props.linkName}
          </Button>     
        </Link>   
      </div>
    );
  }
  
  export default Navbarbutton;
