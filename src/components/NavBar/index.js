import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/action';

function BasicExample() {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(actions.loginFailure());
  };
  return (
    <Navbar bg="black" variant="dark">
      <Container>
        <Navbar.Brand href="/">BarPolo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Cadastro" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/product">
                Produto
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/stock">
                Estoque
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/table">
                Mesa
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/employeer">
                Funcionário
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/store">
                Store
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text id="label-logout" as={Link} to="/login" onClick={() => logout()}>
              Sair
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
