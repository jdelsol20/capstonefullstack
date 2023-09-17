// import css
import '../css/home.css';
import React, { useContext } from 'react';
// import product context
import { ProductContext } from '../context/ProductContext';
// import components
import Product from '../components/Product';

const Home = () => {
// get products from product context
  const { products } = useContext(ProductContext);
  // console.log(products);
// get electronics & jewelery category
  const filteredProducts = products.filter(item => {
    return (
    item.category === "electronics" || 
    item.category === "jewelery"
    );
  });
  // console.log(filteredProducts);
  return <div>
    <section className='vertical-padding'>
      <div className='home-container'>
        <div className='grid'>
          {filteredProducts.map(product => {
            return <Product product={product} key={product.id} />;
          })}
        </div>
      </div>
    </section>
  </div>
  
};

export default Home;