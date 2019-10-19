import React from 'react';
import PropTypes from 'prop-types';
import style from './PetCard.module.css';

const PetCard = ({
  pet: { name, image, age, gender, color, breed, description },
  handleGoBack,
}) => {
  return (
    <section className={style.sectionPet}>
      <button type="button" className={style.btnReturn} onClick={handleGoBack}>
        <i className="material-icons">arrow_left</i>
        Return
      </button>
      <h2 className={style.petName}>All about {name}</h2>
      <div className={style.petFeatures}>
        <img src={image} className={style.petImg} alt={name} />
        <div>
          <p>
            <span className={style.featuresDecor}>Age: </span>
            {age}
          </p>
          <p>
            <span className={style.featuresDecor}>Gender: </span>
            {gender}
          </p>
          <p>
            <span className={style.featuresDecor}>Color: </span>
            {color}
          </p>
          <p>
            <span className={style.featuresDecor}>Breed: </span>
            {breed}
          </p>
        </div>
      </div>
      <p>{description}</p>
    </section>
  );
};

PetCard.propTypes = {
  pet: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  handleGoBack: PropTypes.func.isRequired,
};

export default PetCard;
