import React from 'react';
import PropTypes from 'prop-types';
import style from './PetsCollection.module.css';
import PetsCollectionItem from '../PetsCollectionItem/PetsCollectionItem';

const PetsCollection = ({ pets }) => {
  return (
    <section className={style.sectionPetsCollection}>
      <h2 className={style.petsCollectionTitle}>Available pets</h2>
      <ul className={style.petsCollectionList}>
        {pets.map(el => (
          <PetsCollectionItem
            key={el.id}
            id={el.id}
            name={el.name}
            image={el.image}
          />
        ))}
      </ul>
    </section>
  );
};

PetsCollection.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default PetsCollection;
