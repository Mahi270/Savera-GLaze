import React from 'react';
import all_product from '../assets/all_product';
import Item from '../component/Item/Item';
import './CategoryPage.css';

const TeaCup = () => {
  const teaCups = all_product.filter(
    product => product.category.trim().toLowerCase() === 'tea'
  );

  return (
    <div className="category-page">
      <h2>Tea Cups</h2>
      <div className="product-grid">
        {teaCups.map(product => (
          <Item key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default TeaCup;
