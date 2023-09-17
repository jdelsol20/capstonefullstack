// Import styles and components
import '../css/home.css';
import React, { useContext, useState, useCallback, useEffect } from 'react'; // Import useEffect
import { ProductContext } from '../context/ProductContext';
import Product from '../components/Product';

// Define the Home component
const Home = () => {
  // Get the list of products from the ProductContext
  const { products } = useContext(ProductContext);

  // Create variables to keep track of sorted products and the selected sorting option
  const [sortedProducts, setSortedProducts] = useState(products);
  const [sortOption, setSortOption] = useState('');

  // Function to handle sorting
  const handleSort = useCallback(() => {
    // Create a copy of the original product list
    let sorted = [...products];

    // Apply sorting based on the selected option
    switch (sortOption) {
      case 'priceLowToHigh':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'priceHighToLow':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'nameAToZ':
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'nameZToA':
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        // If no option is selected, keep the original order
        sorted = [...products];
    }

    // Update the displayed products with the sorted list
    setSortedProducts(sorted);
  }, [products, sortOption]);

  // Function to handle changes in the sorting option
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Use useEffect to reset the sorting when the component mounts
  useEffect(() => {
    // Reset sorting when the component mounts
    setSortOption('');
    setSortedProducts(products);
  }, [products]);

  // Render the Home component
  return (
    <div>
      {/* Add vertical padding to the section */}
      <section className="vertical-padding">
        {/* Container for sorting options */}
        <div className="sort-options">
          {/* Label for the sorting dropdown */}
          <label>
            Sort by:
            {/* Dropdown to select the sorting option */}
            <select value={sortOption} onChange={handleSortChange}>
              <option value="">Select...</option>
              <option value="priceLowToHigh">Price Low to High</option>
              <option value="priceHighToLow">Price High to Low</option>
              <option value="nameAToZ">Name A to Z</option>
              <option value="nameZToA">Name Z to A</option>
            </select>
          </label>
          {/* Button to apply sorting (visible when an option is selected) */}
          {sortOption && (
            <button onClick={handleSort}>Apply Sorting</button>
          )}
        </div>
        {/* Container for displaying product cards */}
        <div className="home-container">
          {/* Grid layout for product cards */}
          <div className="grid">
            {/* Map and display the sorted products as Product components */}
            {sortedProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

// Export the Home component
export default Home;