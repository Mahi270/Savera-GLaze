import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt={props.name} className="item-image" />
      </Link>

      <p className='item-name'>{props.name}</p>

      <div className="item-prices">
        <p className='new-price'>₹{props.new_price}</p>
        <span className='hyphen'> - </span>
        <p className='old-price'>₹{props.old_price}</p>
      </div>

      <button className="add-to-cart-btn">
        Add to Cart 🛒
      </button>
    </div>
  );
};

export default Item;
