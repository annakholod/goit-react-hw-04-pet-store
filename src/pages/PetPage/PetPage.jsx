import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pets from '../../helpers/pets.json';
import PetCard from '../../components/PetCard/PetCard';

class PetPage extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  };

  state = {
    selectedPet: null,
  };

  componentDidMount() {
    const { match } = this.props;
    const pet = pets.find(({ id }) => id === match.params.id);
    this.setState({
      selectedPet: pet,
    });
  }

  handleGoBack = () => {
    const { history } = this.props;
    history.push('/pets');
  };

  render() {
    const { selectedPet } = this.state;
    return (
      <>
        {selectedPet && (
          <PetCard pet={selectedPet} handleGoBack={this.handleGoBack} />
        )}
      </>
    );
  }
}

export default PetPage;
