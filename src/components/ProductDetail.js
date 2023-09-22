/* This is the component that when you click on the 
  eye icon it send you over to a new webpage that allows same 
  details in overview. */
  import React, { useEffect, useState, useContext } from 'react';
  import { useParams } from 'react-router-dom';
  import { CartContext } from '../context/CartContext';
  import '../css/productdetail.css';
  
  const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart, cart } = useContext(CartContext);
    const [addedToCart, setAddedToCart] = useState(false); // State to track if item was added
  
    useEffect(() => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
        });
    }, [id]);
  
    const handleAddToCart = () => {
      if (product) {
        addToCart(product, product.id);
        setAddedToCart(true); // Set addedToCart to true when item is added
        // Hide the message after 3 seconds
        setTimeout(() => {
          setAddedToCart(false);
        }, 3000);
      }
    };
  
    if (!product) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="product-detail-container">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <img
          src={product.image}
          alt={product.title}
          className="product-detail-image"
        />
        <button onClick={handleAddToCart} className="add-to-cart-button">
          Add to Cart
        </button>
        {addedToCart && <p>Item added to cart!</p>} {/* Render message when addedToCart is true */}
        <p>Total Items in Cart: {cart.reduce((total, item) => total + item.amount, 0)}</p>
      </div>
    );
  };
  
  export default ProductDetail;