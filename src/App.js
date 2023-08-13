// import react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
// import components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import  Cart  from './components/Cart';

import './App.css';



function App() {
  return (
    <div className="overflow-hidden">
<Router>
  <Header />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/product/:id' element={<ProductDetails />} />
  </Routes>
  <Sidebar />
  <Footer />
</Router>
</div>
  );
}

export default App;
