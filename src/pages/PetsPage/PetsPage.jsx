import React, { Component } from 'react';
import allPets from '../../helpers/pets.json';
import PetsCollection from '../../components/PetsCollection/PetsCollection';

class PetsPage extends Component {
  state = {
    pets: allPets,
  };

  render() {
    const { pets } = this.state;
    return <PetsCollection pets={pets} />;
  }
}

export default PetsPage;
