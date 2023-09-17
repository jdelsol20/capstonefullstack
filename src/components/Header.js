import { Badge, Container, Dropdown, FormControl, Navbar, Nav, } from "react-bootstrap"
import { TiShoppingCart } from "react-icons/ti"
import { Link } from "react-router-dom"
import Cart from "./Cart"
import { useState } from "react"; // Import useState

const Header = ({ onSearch }) => { // Accept onSearch function as a prop
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value); // Call the onSearch function with the search query
  };

  return (
    <Navbar bg="primary" variant="dark" style={{ height: 85 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/">Store</Link> {/* Updated title to "Store" */}
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a product"
            className="m-auto"
            value={searchQuery} // Set the value of the input field
            onChange={handleSearchInputChange} // Handle input changes
          />
        </Navbar.Text>
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant="success">
              <TiShoppingCart color="white" fontsize="25px" />
              <Badge>{10}</Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ minWidth: 370 }}>
              {/* Include the CartItem component to display cart items */}
              <Cart />
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;