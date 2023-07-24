import React from 'react';

const FoodCard = ({ name, image, price }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Price: {price}</p>
      </div>
    </div>
  );
};

export default FoodCard;