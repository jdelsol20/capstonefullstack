import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../css/cartitem.css'

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  const handleRemove = () => {
    removeFromCart(item.id); // Call removeFromCart with the item's id
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div className="item-details">
        <h3>{item.title}</h3>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.amount}</p>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;