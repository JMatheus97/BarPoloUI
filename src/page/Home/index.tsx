import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavBar } from '../../components/NavBar/index';
import { TableWithPerson } from '../../components/TableWithPerson';

export const Home = () => {
  return (
    <>
      <NavBar />
      <Row className="m-1 mt-3">
        <Col xs={6}>
          <Card>
            <Card.Header as="h5" className="text-center">
              Lista de Mesas
            </Card.Header>
            <Card.Body className="text-center">
              <Row>
                <TableWithPerson />
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6}>
          <Card>
            <Card.Header as="h5" className="text-center">
              Lista de Comandas
            </Card.Header>
            <Card.Body />
          </Card>
        </Col>
      </Row>
    </>
  );
};
