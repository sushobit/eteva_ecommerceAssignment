import React from 'react';

const Product = ({ id, name, price, description, image, addToCart }) => {
  return (
    <div className="product">
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <p>Price: ₹{price}</p>
      <h2>{description}</h2>
      <button onClick={() => addToCart(id)}>Add to Cart</button>
    </div>
  );
};

export default Product;
