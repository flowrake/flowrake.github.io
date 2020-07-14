import React, { Component } from 'react';
import ServiceCard from './servicecard';
import ServiceCard2 from './servicecard2';
import Braider from './braid.jpg';
import Blank from './BlankImage.png';

class Service extends Component {
  render() {
    return (
        <div>
            <ServiceCard 
              PrimaryText = 'Catheters' 
              SecondaryText = 'Deflectable/steerable catheters'
              ThirdText = 'Microcatheters'
              FourText = 'Coiled and braided shafts'
              FifthText = 'PTFE, nylon and PEBAX lined shafts'
              ImagePath = {Blank}
              ImageTitle = 'First Image'
            /><br></br>
            <ServiceCard2 
              PrimaryText = 'Braiding' 
              SecondaryText = '8, 16 or 32 filaments'
              ThirdText = 'Stainless steel, nitinol and polmer fibers'
              FourText = 'Braid density from 15 to 200 PPI'
              FifthText = 'Filament ODs up to 0.005"'
              ImagePath = {Braider} 
              ImageTitle = 'First Image'
            /><br></br>
            <ServiceCard 
              PrimaryText = 'Extrusion' 
              SecondaryText = 'Radiopaque loadings such as barium sulfate and tungsten'
              ThirdText = 'PEBAX, nylon and polyurethanes'
              FourText = 'ODs from 0.015" to 0.5"'
              FifthText = ''
              ImagePath = {Blank}
              ImageTitle = 'First Image'
            />
        </div>
    );
  }
}

export default Service;
