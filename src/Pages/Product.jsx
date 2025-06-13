import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Bredcrums from '../component/Bredcrums/Bredcrums';
import ProductDisplay from '../component/ProductDisplay/ProductDisplay';
import Description from '../component/Description/Description';
import RelatedProducts from '../component/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === parseInt(productId));
  return (
    <div>
      <Bredcrums product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <RelatedProducts/>
    </div>
  )
}

export default Product