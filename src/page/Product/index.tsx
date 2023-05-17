/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { toast } from 'react-toastify';
import { CiEdit } from 'react-icons/ci';
import { TiDeleteOutline } from 'react-icons/ti';
import { NavBar } from '../../components/NavBar';
import { getProducts } from '../../helpers/request-get-global';
import axios from '../../services/axios';
import './styles.css';

export type IProduct = {
  _id: string;
  nome: string;
  valor: number;
};

export const Product = () => {
  const [nome, setNome] = useState<string>('');
  const [valor, setValor] = useState<number>(0);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [selector, setSelector] = useState<boolean>(false);
  const [id, setId] = useState<string>('');

  const listProducts = async () => {
    const resultProducts: IProduct[] = await getProducts();
    setProducts(resultProducts);
  };

  useEffect(() => {
    listProducts();
  }, []);

  const clear = () => {
    setNome('');
    setValor(0);
  };

  const edit = (index: number) => {
    const product = { ...products };

    if (product.length === 0) return;

    setSelector(true);
    setId(product[index]._id);
    setNome(product[index].nome);
    setValor(product[index].valor);
  };

  const save = async () => {
    if (selector) {
      await axios
        .post(`/product/${id}`, { nome, valor })
        .then(() => {
          toast.success('Editado com sucesso !');
        })
        .catch((error) => {
          toast.error(error.response.data.message);
          // eslint-disable-next-line no-useless-return
          return;
        });
    } else {
      if (nome === '') {
        toast.error('O campo nome é obragitorio');
        return;
      }

      await axios
        .post('/product/new', { nome, valor })
        .then(() => {
          toast.success('Salvo com sucesso !');
        })
        .catch((error) => {
          toast.error(error.response.data.message);
          // eslint-disable-next-line no-useless-return
          return;
        });
    }

    listProducts();
    clear();
  };

  const deleteProduct = async (id: string) => {
    await axios
      .delete(`/product/${id}`)
      .then(() => {
        toast.success('Excluído com sucesso !');
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        // eslint-disable-next-line no-useless-return
        return;
      });

    listProducts();
    clear();
  };

  return (
    <>
      <NavBar />
      <Card className="m-5">
        <Card.Header as="h5" className="text-center">
          Cadastro de Produtos
        </Card.Header>
        <Card.Body>
          <Form>
            <Row className="m-3">
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Produto</Form.Label>
                <Form.Control type="text" placeholder="Nome do Produto" value={nome} onChange={(e) => setNome(e.target.value)} />
              </Form.Group>
              <Form.Group as={Col} md="2">
                <Form.Label>Valor</Form.Label>
                <Form.Control type="number" value={valor} onChange={(e) => setValor(parseFloat(e.target.value))} />
              </Form.Group>
            </Row>
            <Row className="m-3">
              <Form.Group as={Col} md="4">
                <Button className="button-save" type="button" onClick={save}>
                  Salvar
                </Button>
              </Form.Group>
            </Row>
          </Form>

          <Row className="m-3">
            <Table responsive>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Valor</th>
                  <th>Editar</th>
                  <th>Deletar</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p, index) => (
                  // eslint-disable-next-line no-underscore-dangle
                  <tr key={p._id}>
                    <td>{p.nome}</td>
                    <td>{p.valor}</td>
                    <td>
                      <CiEdit className="icon-edit" size={23} onClick={() => edit(index)} />
                    </td>
                    <td>
                      <TiDeleteOutline className="icon-delete" size={23} onClick={() => deleteProduct(p._id)} />
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
