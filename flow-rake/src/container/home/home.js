import React, { Component } from 'react';
import MissionImage from '../aboutus/person.png';
import MissionStatement from './missionstatement';

class Home extends Component {
  render() {
    return (
      <div>
        <MissionStatement
          Name='What is FlowRake?'
        />
      </div>
    );
  }
}

export default Home;
