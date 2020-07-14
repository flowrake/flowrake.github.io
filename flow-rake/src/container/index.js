import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './home/home';
import ContactUs2 from './contactus/contactus2';
import Privacy from './privacy/privacycard';
import Terms from './termsconditions/terms';
import { Grid } from '@material-ui/core';

class Body extends Component {
    render() {
        return (
            <Grid container justify="center">
                <div    >
                    <Route path="/" exact component={Home} />
                    <Route path="/Home" component={Home} />
                    <Route path="/ContactUs" component={ContactUs2} />
                    <Route path="/Privacy" component={Privacy} />
                    <Route path="/Terms" component={Terms} />
                </div>
            </Grid>
        )
    }
}

export default Body;