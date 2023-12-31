import React, { useState, useEffect, useContext } from "react";
import { Badge, Container, Dropdown, FormControl, Navbar, Nav } from "react-bootstrap";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom"; // Import Link
import Cart from "./Cart";
import { CartContext } from "../context/CartContext";
import '../css/header.css';

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { cart } = useContext(CartContext);

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);

    if (query.trim() === '') {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      fetch(`https://fakestoreapi.com/products?q=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const totalItemsInCart = cart.reduce((total, item) => total + item.amount, 0);

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 85 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Store
          </Link>
        </Navbar.Brand>
        <Nav className="m-auto">
          <Dropdown alignRight show={searchQuery.trim() !== ''}>
            <Dropdown.Toggle variant="light" id="search-dropdown">
              <FormControl
                style={{
                  width: 500,
                  backgroundColor: "#f8f9fa",
                  color: "#343a40",
                  border: "none",
                }}
                placeholder="Search a product"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: "100%" }}>
              <div className="search-results">
                {searchResults.map((result) => (
                  <div
                    key={result.id}
                    style={{
                      padding: "10px",
                      borderBottom: "1px solid #ccc",
                      color: "#343a40",
                    }}
                  >
                    {result.title}
                  </div>
                ))}
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="danger">
              <TiShoppingCart color="white" fontSize="25px" />
              <Badge>{totalItemsInCart}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }}>
              <Cart />
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
        {/* Use Link to navigate to the login page */}
        <Nav>
          <Link to="/login" className="login-button">
            Login
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;