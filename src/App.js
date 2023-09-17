// import react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
// import components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import  Cart  from './components/Cart';

import './App.css';



function App() {
 // Define the handleSearch function
 const handleSearch = (query) => {
  // Implement your search logic here
  if (query.trim() === '') {
    // If the query is empty, do nothing or reset the search results
    console.log('Empty search query');
    // You can reset the search results or handle it as per your requirement
  } else {
    // If the query is not empty, perform a search
    console.log('Searching for:', query);

    // Make an API request to fetch products and filter based on the query
    fetch(`https://fakestoreapi.com/products?q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        // Handle the data (filtered products) here
        console.log('Search results:', data);
        // You can update the UI with the search results or perform any other actions
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle any errors that occur during the API request
      });
  }
};

  return (
    <div className="app-container">
<Router>
  <Header onSearch={handleSearch} />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/product/:id' element={<ProductDetail />} />
  </Routes>
  <Sidebar />
  <Footer />
</Router>
</div>
  );
}

export default App;
