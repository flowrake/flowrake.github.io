import React, { Component } from 'react';
import './App.css';
import Footernb from './container/footer/footernb';
import { BrowserRouter } from 'react-router-dom';
import Body from './container/index';
import { Grid } from '@material-ui/core';


import Paper from '@material-ui/core/Paper';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Grid container justify="center">
          <div className="App">
            <body className="App-body">
              <Body className="App-body" env={this.props.env} />
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
