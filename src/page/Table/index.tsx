/* eslint-disable no-underscore-dangle */
/* eslint-disable no-useless-return */
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { CiEdit } from 'react-icons/ci';
import { TiDeleteOutline } from 'react-icons/ti';
import { toast } from 'react-toastify';
import { NavBar } from '../../components/NavBar/index';
import { getTables } from '../../helpers/request-get-global';

import './styles.css';
import axios from '../../services/axios';

export type ITable = {
  _id: string;
  tableNumber: number;
  customerQuantity: number;
  status: string;
};

export const Tables = () => {
  const [tableNumber, setTableNumber] = useState<number>(0);
  const [customerQuantity, setCustomerQuantity] = useState<number>(0);
  const [status, setStatus] = useState<string>('');
  const [tables, setTables] = useState<ITable[]>([]);
  const [selector, setSelector] = useState<boolean>(false);
  const [id, setId] = useState<string>('');

  const listTables = async () => {
    const resultTables: ITable[] = await getTables();
    setTables(resultTables);
  };

  useEffect(() => {
    listTables();
  }, []);

  const clear = () => {
    setTableNumber(0);
    setCustomerQuantity(0);
    const statusQuery = document.querySelector<HTMLInputElement>('#status');
    if (statusQuery) {
      statusQuery.value = '';
    }
  };

  const edit = async (index: number) => {
    const table = { ...tables };

    setSelector(true);
    setId(table[index]._id);
    setTableNumber(table[index].tableNumber);
    setCustomerQuantity(table[index].customerQuantity);
    setStatus(table[index].status);
    const statusQuery = document.querySelector<HTMLInputElement>('#status');
    if (statusQuery) {
      statusQuery.value = table[index].status ?? '';
    }
  };

  const save = async () => {
    if (selector) {
      await axios
        .post(`/table/${id}`, { tableNumber, customerQuantity, status })
        .then(() => toast.success('Editada com sucesso !'))
        .catch((error) => error.response.data.message);

      listTables();
      clear();
    } else {
      if (!Number.isInteger(tableNumber)) {
        toast.error('O campo numero de mesa tem ser maior do 0 e precisa ser numero !');
        return;
      }

      if (!Number.isInteger(customerQuantity)) {
        toast.error('O campo numero de mesa tem ser maior do 0 e precisa ser numero !');
        return;
      }

      if (status === '') {
        toast.error('O status é obrigatório !');
        return;
      }

      await axios
        .post('/table/new', { tableNumber, customerQuantity, status })
        .then(() => toast.success('Salvo com sucesso !'))
        .catch((error) => error.response.data.message);

      listTables();
      clear();
    }
  };

  const deleteTable = async (id: string) => {
    await axios
      .delete(`/table/${id}`)
      .then(() => toast.success('Excluido com sucesso !'))
      .catch((error) => error.response.data.message);

    listTables();
    clear();
  };

  return (
    <>
      <NavBar />
      <Card className="m-5">
        <Card.Header as="h5" className="text-center">
          Cadastro de Mesa
        </Card.Header>
        <Card.Body>
          <Form>
            <Row className="m-3">
              <Form.Group as={Col} md="2" controlId="validationCustom01">
                <Form.Label>Numero de Mesa</Form.Label>
                <Form.Control type="number" value={tableNumber} onChange={(e) => setTableNumber(parseInt(e.target.value, 10))} />
              </Form.Group>
              <Form.Group as={Col} md="2">
                <Form.Label>Quantidade Clientes</Form.Label>
                <Form.Control type="number" value={customerQuantity} onChange={(e) => setCustomerQuantity(parseInt(e.target.value, 10))} />
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="type">
                <Form.Label>Status</Form.Label>
                <Form.Select onChange={(e) => setStatus(e.target.value)} id="status">
                  <option>...</option>
                  <option value="Dísponivel">Dísponivel</option>
                  <option value="Ocupado">Ocupado</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="m-3">
              <Form.Group as={Col} md="4">
                <Button className="button-save" type="button" onClick={() => save()}>
                  Salvar
                </Button>
              </Form.Group>
            </Row>
          </Form>

          <Row className="m-3">
            <Table responsive>
              <thead>
                <tr>
                  <th>Numero da Mesa</th>
                  <th>Quantidade de Clientes</th>
                  <th>Status</th>
                  <th>Editar</th>
                  <th>Deletar</th>
                </tr>
              </thead>
              <tbody>
                {tables.map((p, index) => (
                  // eslint-disable-next-line no-underscore-dangle
                  <tr key={p._id}>
                    <td>{p.tableNumber}</td>
                    <td>{p.customerQuantity}</td>
                    <td>{p.status}</td>
                    <td>
                      <CiEdit className="icon-edit" size={23} onClick={() => edit(index)} />
                    </td>
                    <td>
                      <TiDeleteOutline className="icon-delete" size={23} onClick={() => deleteTable(p._id)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
