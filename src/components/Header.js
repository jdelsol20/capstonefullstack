import { Badge, Container, Dropdown, FormControl, Navbar, Nav, } from "react-bootstrap"
import { TiShoppingCart } from "react-icons/ti"

// See more infor about navbar here https://react-bootstrap-v4.netlify.app/components/navbar/
// https://react-bootstrap.netlify.app/docs/forms/form-control/
const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" style={{height:85}}>
        <Container>
            <Navbar.Brand>
                <a>Cart</a>
            </Navbar.Brand>
            <Navbar.Text className="search">
                <FormControl
                    style={{ width: 500}} 
                    placeholder="Search a product"
                    className="m-auto"
                />
            </Navbar.Text>
            <Nav>
                <Dropdown alignRight>
                    <Dropdown.Toggle variant="success">
                        <TiShoppingCart color="white" fontsize="25px" />
                        <Badge>{10}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ minWidth: 370 }}>
                        <span style={{ padding: 10 }}>Cart is Empty!</span>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header