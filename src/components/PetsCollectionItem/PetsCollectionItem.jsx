import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './PetsCollectionItem.module.css';

const PetsCollectionItem = ({ id, name, image, match }) => (
  <li className={style.petsCollectionItem}>
    <Link to={`${match.path}/${id}`} className={style.petsCollectionLink}>
      <div className={style.imgOverlay}>
        <img src={image} alt="" />
      </div>
      <p className={style.petsName}>{name}</p>
    </Link>
  </li>
);

PetsCollectionItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(PetsCollectionItem);
