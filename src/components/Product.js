// import css
import '../css/product.css';
import React, { useContext } from 'react';
//import link
import { Link } from 'react-router-dom';
//import icons
import { BsPlus, BsEyeFill } from 'react-icons/bs';

const Product = ({product}) => {
    console.log(product);
  //destructure products 
  const { id, image, category, title, price } = product;
  return (
    <div>
      <div className='product-card'>
        <div className='product-image-container'>
          {/* Image */}
          <img className='product-image' src={image} alt="" />
        </div>
        {/* Buttons */}
        <div className='buttons-container'>
          <button>
            <div className='button-wrapper'>
              <BsPlus className='button-icon' />
            </div>
          </button>
          <Link to={`/product/${id}`} className='view-button'>
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* Category, title, and price */}
      <div className='product-details'>
        <div className='category-text'>{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className='product-title'>{title}</h2>
        </Link>
        <div className='product-price'>$ {price}</div>
      </div>
    </div>
  );
};

export default Product;