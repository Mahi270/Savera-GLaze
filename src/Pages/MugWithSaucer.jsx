import React from 'react';
import all_product from '../assets/all_product';
import Item from '../component/Item/Item';
import './CategoryPage.css';

const MugWithSaucer = () => {
  const saucers = all_product.filter(
  product.category.trim().toLowerCase() === 'mug with saucer'
  );
   console.log('Filtered Saucers:', saucers);
  return (
    <div className="category-page">
      <h2>Mug with Saucer</h2>
      <div className="product-grid">
        {saucers.length > 0 ? (
          saucers.map(product => <Item key={product.id} {...product} />)
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default MugWithSaucer;



