// Import necessary tools from React
import React, { createContext, useState } from 'react';

// Create a special place for our shopping cart information
export const CartContext = createContext();

// Make a special box to hold our shopping cart and provide it to other parts of our app
const CartProvider = ({ children }) => {
  // Create a spot to keep track of what's inside our shopping cart, starting empty
  const [cart, setCart] = useState([]);

  // Make a way to add items to our cart, like adding apples to a basket
  const addToCart = (product, id) => {
    // Make a new item with one quantity and copy all the details of the product
    const newItem = { ...product, amount: 1 };
    // Check if we already have an item with the same ID in our cart
    const cartItem = cart.find((item) => item.id === id);

    // If we found an item with the same ID in our cart
    if (cartItem) {
      // Create a new shopping cart by looking through what's already inside
      const newCart = cart.map((item) => {
        // If we found the same item's ID, add one more to its quantity
        if (item.id === id) {
          return { ...item, amount: item.amount + 1 };
        } else {
          // Otherwise, leave the item as it is
          return item;
        }
      });
      // Update our shopping cart with the new list
      setCart(newCart);
    } else {
      // If the item with the provided ID is not in our cart, add it as a new item
      setCart([...cart, newItem]);
    }
  };

  // Make a way to remove items from our cart, like taking apples out of our basket
  const removeFromCart = (id) => {
    // Create a new shopping cart by looking through what's already inside
    const updatedCart = cart.map((item) => {
      // If we found an item's ID that matches the one we want to remove
      if (item.id === id) {
        // Check if there's more than one of this item
        if (item.amount > 1) {
          // Remove one from its quantity
          return { ...item, amount: item.amount - 1 };
        } else {
          // If there's only one, remove the whole item by returning nothing
          return null;
        }
      }
      // If the item's ID doesn't match the one we want to remove, leave it as it is
      return item;
    }).filter((item) => item !== null); // Get rid of any empty spaces in the shopping cart

    // Update our shopping cart with the updated list
    setCart(updatedCart);
  };

  // Provide our shopping cart, the ability to add items, and the ability to remove items to the rest of our app
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Export our special CartProvider box as the main thing we want to share with others
export default CartProvider;