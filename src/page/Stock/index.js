/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { CiEdit } from 'react-icons/ci';
import { TiDeleteOutline } from 'react-icons/ti';
import { toast } from 'react-toastify';
import { isNumber } from 'lodash';
import NavBar from '../../components/NavBar';
import { getProducts, getStocks } from '../../helpers/request-get-global';
import { selectProcuts } from './module';
import axios from '../../services/axios';
import './styles.css';

const moment = require('moment'); // eslint-disable

export default function Stock() {
  const [code, setCode] = useState('');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('');
  const [unitOfMeasurement, setUnitOfMeasurement] = useState('');
  const [batch, setBatch] = useState('');
  const [validity, setValidity] = useState('');
  const [product, setProduct] = useState('');
  const [products, setProducts] = useState([]);
  const [stocks, setStocks] = useState([]);
  const [id, setId] = useState('');
  const [selector, setSelector] = useState(false);

  const listProducts = async () => {
    const resultProducts = await getProducts();
    setProducts(resultProducts);
  };

  const listStocks = async () => {
    const resultStocks = await getStocks();
    setStocks(resultStocks);
  };

  useEffect(() => {
    listProducts();
    listStocks();
  }, []);

  const hundleProducts = async (e) => {
    const productsSelect = await selectProcuts(e, products);

    if (productsSelect !== null) {
      setProduct(productsSelect);
    }
  };

  const edit = (index) => {
    const stock = { ...stocks };
    setSelector(true);
    setId(stock[index]._id);
    setCode(stock[index].code);
    setProduct(stock[index].product._id);
    setAmount(stock[index].amount);
    setType(stock[index].type);
    setUnitOfMeasurement(stock[index].unitOfMeasurement);
    setBatch(stock[index].batch);
    setValidity(moment(stock[index].validity).format('YYYY-MM-DD'));
    document.getElementById('products').value = stock[index].product.nome;
    document.getElementById('unitOfMeasurement').value = stock[index].unitOfMeasurement;
    document.getElementById('type').value = stock[index].type;
    document.getElementById('validity').value = moment(stock[index].validity).format('YYYY-MM-DD');
  };

  const clear = () => {
    setId('');
    setSelector(false);
    setCode('');
    setAmount(0);
    setProduct('');
    setUnitOfMeasurement('');
    setValidity(new Date());
    setType('');
    setBatch('');
    document.getElementById('products').value = '...';
    document.getElementById('unitOfMeasurement').value = '...';
    document.getElementById('type').value = '...';
  };

  const save = async () => {
    if (selector) {
      await axios
        .post(`/stock/${id}`, { code, product: product._id, unitOfMeasurement, amount, validity, type, batch })
        .then(() => toast.success('Editado com sucesso !'))
        .catch((error) => {
          toast.error(error.response.data.message);
        });

      clear();
      listStocks();
    } else {
      if (code === '') {
        toast.error('O código do produto deve ser informado !');
        return;
      }

      if (product === '') {
        toast.error('O produto deve ser informado !');
        return;
      }

      if (unitOfMeasurement === '') {
        toast.error('A unidade de medida deve ser informada !');
        return;
      }

      if (amount === 0 && isNumber(amount)) {
        toast.error('A quantidade deve ser informada ou precisa ser um número !');
        return;
      }

      if (code === '') {
        toast.error('O código do produto deve ser informado');
        return;
      }

      await axios
        .post('/stock/new', { code, product: product._id, unitOfMeasurement, amount, validity, type, batch })
        .then(() => toast.success('Salvo com sucesso !'))
        .catch((error) => {
          toast.error(error.response.data.message);
        });

      clear();
      listStocks();
    }
  };

  const deleteStock = async (id) => {
    await axios
      .delete(`/stock/${id}`)
      .then(() => toast.success('Excluído com sucesso !'))
      .catch((error) => toast.error(error.response.data.message));
    clear();
    listStocks();
  };

  return (
    <>
      <NavBar />
      <Card className="m-5">
        <Card.Header as="h5" className="text-center">
          Cadastro de Estoque
        </Card.Header>
        <Card.Body>
          <Form>
            <Row className="m-3">
              <Form.Group as={Col} md="3" controlId="code">
                <Form.Label>Código</Form.Label>
                <Form.Control type="text" iplaceholder="Nome do Produto" value={code} onChange={(e) => setCode(e.target.value)} />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="products">
                <Form.Label>Produtos</Form.Label>
                <Form.Select onChange={(e) => hundleProducts(e)}>
                  <option>...</option>
                  {products.map((p) => (
                    // eslint-disable-next-line no-underscore-dangle
                    <option key={p._id}>{p.nome}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="unitOfMeasurement">
                <Form.Label>Unidade Medida</Form.Label>
                <Form.Select onChange={(e) => setUnitOfMeasurement(e.target.value)}>
                  <option>...</option>
                  <option value="KG">Quilograma</option>
                  <option value="UND">Unidade</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="amount">
                <Form.Label>Quantidade</Form.Label>
                <Form.Control type="number" value={amount} onChange={(e) => setAmount(parseFloat(e.target.value))} />
              </Form.Group>
            </Row>
            <Row className="m-3">
              <Form.Group as={Col} md="3" controlId="validity">
                <Form.Label>Validade</Form.Label>
                <Form.Control type="date" placeholder="Nome do Produto" value={validity} onChange={(e) => setValidity(e.target.value)} />
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="type">
                <Form.Label>Tipo</Form.Label>
                <Form.Select onChange={(e) => setType(e.target.value)}>
                  <option>...</option>
                  <option value="Insumo">Insumo</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} md="3">
                <Form.Label>Lote</Form.Label>
                <Form.Control type="text" id="batch" value={batch} onChange={(e) => setBatch(e.target.value)} />
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
                  <th>Código</th>
                  <th>Produto</th>
                  <th>Unidade Medida</th>
                  <th>Quantidade</th>
                  <th>Validade</th>
                  <th>Tipo</th>
                  <th>Lote</th>
                  <th>Editar</th>
                  <th>Deletar</th>
                </tr>
              </thead>
              <tbody>
                {stocks.map((skt, index) => (
                  // eslint-disable-next-line no-underscore-dangle
                  <tr key={skt._id}>
                    <td>{skt.code}</td>
                    <td>{skt.product.nome}</td>
                    <td>{skt.unitOfMeasurement}</td>
                    <td>{skt.amount}</td>
                    <td>{moment(skt.validity).format('DD/MM/YYYY ')}</td>
                    <td>{skt.type}</td>
                    <td>{skt.batch}</td>
                    <td>
                      <CiEdit className="icon-edit" size={23} onClick={() => edit(index)} />
                    </td>
                    <td>
                      <TiDeleteOutline className="icon-delete" size={23} onClick={() => deleteStock(skt._id)} />
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
}
