import React, { Component } from 'react';
import './App.css';
import Header from './container/header/header';
import Navbar from './container/header/navbar';
import Footernb from './container/footer/footernb';
import { BrowserRouter } from 'react-router-dom';
import Body from './container/index';
import uc from '../src/container/header/underconstruct.jpg';
import { Grid } from '@material-ui/core';
import Footer from './container/footer/footer';

import Paper from '@material-ui/core/Paper';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Grid container justify="center">
          <div className="App">
            <header>
              <Header />
            </header>

            <Paper className="paperRoot" elevation={1}>
              <Navbar />
            </Paper>
            <br></br>

            <body className="App-body">
              {//<Paper className="paperRoot" elevation={1}>  
              }
              <Body className="App-body" env={this.props.env} />
              {//</Paper>
              }
            </body>
            <br></br>

            <footer>
              <Paper className="paperRoot" elevation={1}>
                <Footernb />
              </Paper>
              <br></br>
              Flowrake © Year | Address | Phone
        <script type="text/javascript" src="https://cdn.ywxi.net/js/1.js" async></script>
            </footer>
          </div>
        </Grid>
      </BrowserRouter>
    );
  }
}

export default App;
