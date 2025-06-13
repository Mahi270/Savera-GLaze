import React from 'react';
import all_product from '../assets/all_product';
import Item from '../component/Item/Item';
import './CategoryPage.css';

const CoffeeMugs = () => {
  const coffeeMugs = all_product.filter(
    product => product.category.trim().toLowerCase() === 'coffee mugs'
  );

  return (
    <div className="category-page">
      <h2>Coffee Mugs</h2>
      <div className="product-grid">
        {coffeeMugs.map(product => (
          <Item key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default CoffeeMugs;
