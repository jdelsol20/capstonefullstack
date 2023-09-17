// Import necessary modules from external libraries
import React from 'react'; // Import the main React library
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import routing functionality from React Router DOM library

// Import your custom pages and components
import Home from './pages/Home'; // Import the Home page component
import ProductDetails from './pages/ProductDetails'; // Import the ProductDetails page component
import Sidebar from './components/Sidebar'; // Import the Sidebar component
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer'; // Import the Footer component
import ProductDetail from './components/ProductDetail'; // Import the ProductDetail component
import Login from "./components/Login"; // Import the Login component
import Cart from './components/Cart'; // Import the Cart component

import './App.css'; // Import your custom CSS styles

// Define the main App component
function App() {
  // Define a function called handleSearch that takes a query parameter
  const handleSearch = (query) => {
    // Check if the query is empty
    if (query.trim() === '') {
      // If the query is empty, log a message to the console
      console.log('No search keyword entered');
      // You can add additional logic here if needed
    } else {
      // If the query is not empty, log the query to the console
      console.log('Searching for:', query);

      // Make a request to an online store to find products matching the query
      // and show the results on the screen
      // For now, we're just logging the results to the console
      fetch(`https://fakestoreapi.com/products?q=${query}`)
        .then((response) => response.json())
        .then((data) => {
          // Handle the data (filtered products) here, for now, we're just logging it
          console.log('Search results:', data);
          // You can update the UI with the search results or perform any other actions here
        })
        .catch((error) => {
          // If there's an error in the process, log it to the console
          console.error('Error:', error);
          // Handle any errors that occur during the request
        });
    }
  };

  // Return the JSX (UI) for your application
  return (
    <div className="app-container">
      {/* Set up the Router component to enable routing */}
      <Router>
        {/* Render the Header component with the handleSearch function as a prop */}
        <Header onSearch={handleSearch} />
        {/* Define routes for your application */}
        <Routes>
          <Route path='/' element={<Home />} /> {/* Display the Home component when visiting the website's root */}
          <Route path='/product/:id' element={<ProductDetail />} /> {/* Display the ProductDetail component with a dynamic 'id' parameter */}
          <Route path="/login" element={<Login />} /> {/* Display the Login component when visiting '/login' */}
        </Routes>
        {/* Render the Sidebar, Footer, and potentially other components */}
        <Sidebar />
        <Footer />
        {/* You can render the Cart component here or in any other component */}
        {/* <Cart /> */}
      </Router>
    </div>
  );
}

// Export the App component as the main entry point of your application
export default App;