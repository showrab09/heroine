import React from 'react';
import "./HeroineInfo.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const HeroineInfo = (props) => {

  const { name, country, salary, img, oscar, age } = props.heroine;
  return (
    <div className="card-image">
      <div >
        <img src={img} alt="" />
      </div>
      <div className="card-details">
        <p><span className="title">Name:</span>{name} </p>
        <p><span className="title">Country: </span> {country}</p>
        <p><span className="title"> Oscar: </span> {oscar} </p>
        <p><span className="title">Age: </span> {age}</p>
        <p><span className="title">Salary: $</span>{salary} </p>

        <button onClick={() => props.eventhandler(props.heroine)} className="button"><FontAwesomeIcon icon={faShoppingCart} /> Add Heroine </button>
      </div>
    </div>
  );
};

export default HeroineInfo;