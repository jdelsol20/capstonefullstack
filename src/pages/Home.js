// Import CSS
import '../css/home.css';
import React, { useContext } from 'react';
// Import product context
import { ProductContext } from '../context/ProductContext';
// Import components
import Product from '../components/Product';

const Home = () => {
  // Get products from product context
  const { products } = useContext(ProductContext);

  return (
    <div>
      <section className='vertical-padding'>
        <div className='home-container'>
          <div className='grid'>
            {products.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;