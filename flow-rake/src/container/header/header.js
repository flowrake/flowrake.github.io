import React, { Component } from 'react';
import logo from './flowrake.jpg';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <title>Flowrake</title>
        {<img src={logo} className="App-logo" alt="logo" />
        }{/*<br></br><br></br>          
          <h1></h1>
          */}
      </header>
    );
  }
}

export default Header;
