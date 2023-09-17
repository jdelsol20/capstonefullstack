// Import necessary tools from React
import React, { useContext } from 'react';
// Import the shopping cart context
import { CartContext } from '../context/CartContext';
// Import the CSS styles for this component
import '../css/cartitem.css';

// Create a component to display a single item in the shopping cart
const CartItem = ({ item }) => {
  // Access the removeFromCart function from the CartContext
  const { removeFromCart } = useContext(CartContext);

  // Define a function to handle the removal of this item from the cart
  const handleRemove = () => {
    // Call the removeFromCart function with the item's id to remove it
    removeFromCart(item.id);
  };

  // Render the item details and a "Remove" button
  return (
    <div className="cart-item">
      {/* Display the item's image */}
      <img src={item.image} alt={item.title} />
      <div className="item-details">
        {/* Display the item's title */}
        <h3>{item.title}</h3>
        {/* Display the item's price */}
        <p>Price: ${item.price}</p>
        {/* Display the quantity of this item in the cart */}
        <p>Quantity: {item.amount}</p>
        {/* Display a button to remove this item */}
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

// Export the CartItem component to use it in other parts of the app
export default CartItem;