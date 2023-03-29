import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar bg="black" variant="dark">
      <Container>
        <Navbar.Brand href="/">BarPolo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Cadastro" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/product">
                Cadastro
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/stock">
                Estoque
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mesa">
                Mesa
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
