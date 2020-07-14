import React, { Component } from 'react';
import AboutUsCard from './aboutuscard';
import AboutUsCard2 from './aboutuscard2';
import Person from './person.png'

class AboutUs extends Component {
  render() {
    return (
        <div className = 'aboutus'>
            <AboutUsCard 
              Name = 'First Person' 
              Details = 'CEO - etc'
              Image = {Person}
              ImageTitle = 'Cool Picture'
            /><br></br>
            <AboutUsCard2 
              Name = 'Second Person' 
              Details = 'CEO - etc'
              Image = {Person}
              ImageTitle = 'Cool Picture'
            /> 
            {/*<AboutUsCard 
              Name = 'Third One' 
              Details = 'CEO - etc'
              Image = {Person}
              ImageTitle = 'Cool Picture'
            /> <br/>
            <AboutUsCard2 
              Name = 'Fourth One' 
              Details = 'CEO - etc'
              Image = {Person}
              ImageTitle = 'Cool Picture'
            /> <br/>
            */}
        </div>
    );
  }
}

export default AboutUs;
