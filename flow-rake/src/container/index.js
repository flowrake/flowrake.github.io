import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './home/home';
import Details from './home/details';
import Privacy from './privacy/privacycard';
import { Grid } from '@material-ui/core';

class Body extends Component {
    render() {
        return (
            <Grid container justify="center">
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/Home" component={Home} />
                    <Route path="/Details" component={Details} />
                    <Route path="/Privacy" component={Privacy} />
                </div>
            </Grid>
        )
    }
}

export default Body;