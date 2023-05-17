/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { CiEdit } from 'react-icons/ci';
import { TiDeleteOutline } from 'react-icons/ti';
import { NavBar } from '../../components/NavBar';
import { getStores } from '../../helpers/request-get-global';

import './styles.css';

type IAdress = {
  cep: string;
  street: string;
  numberStore?: number;
  city: string;
  district: string;
  uf: string;
  complement: string;
};

type IStore = {
  _id: string;
  name: string;
  cnpj: string;
  adress: IAdress;
};

export const Store = () => {
  const [stores, setStores] = useState<IStore[]>([]);

  const listStores = async () => {
    const resultStores: IStore[] = await getStores();
    setStores(resultStores);
  };

  useEffect(() => {
    listStores();
  }, []);

  return (
    <>
      <NavBar />
      <Card className="m-5">
        <Card.Header as="h5" className="text-center">
          Cadastro de Lojas
        </Card.Header>
        <Card.Body>
          <Form>
            <Row className="m-3">
              <Form.Group as={Col} md="4" controlId="name">
                <Form.Label>Empresa</Form.Label>
                <Form.Control type="text" placeholder="Nome da Empresa" />
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="cnpj">
                <Form.Label>CNPJ</Form.Label>
                <Form.Control type="text" placeholder="000.000.000/000-00" />
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="street">
                <Form.Label>Rua</Form.Label>
                <Form.Control type="text" placeholder="Nome da Rua" />
              </Form.Group>
              <Form.Group as={Col} md="1" controlId="numberStore">
                <Form.Label>Número</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </Row>
            <Row className="m-3">
              <Form.Group as={Col} md="3" controlId="district">
                <Form.Label>Bairro</Form.Label>
                <Form.Control type="text" placeholder="Nome do Bairro" />
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="city">
                <Form.Label>Cidade</Form.Label>
                <Form.Control type="text" placeholder="Nome da Cidade" />
              </Form.Group>
              <Form.Group as={Col} md="1" controlId="uf">
                <Form.Label>UF</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="complement">
                <Form.Label>Complemento</Form.Label>
                <Form.Control type="text" placeholder="Complemento" />
              </Form.Group>
            </Row>
            <Row className="m-3">
              <Form.Group as={Col} md="4">
                <Button className="button-save" type="button">
                  Salvar
                </Button>
              </Form.Group>
            </Row>
          </Form>

          <Row className="m-3">
            <Table responsive>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>CNPJ</th>
                  <th>Rua</th>
                  <th>Cidade</th>
                  <th>UF</th>
                  <th>Editar</th>
                  <th>Deletar</th>
                </tr>
              </thead>
              <tbody>
                {stores.map((p) => (
                  // eslint-disable-next-line no-underscore-dangle
                  <tr key={p._id}>
                    <td>{p.name}</td>
                    <td>{p.cnpj}</td>
                    <td>{p.adress.street}</td>
                    <td>{p.adress.city}</td>
                    <td>{p.adress.uf}</td>
                    <td>
                      <CiEdit className="icon-edit" size={23} />
                    </td>
                    <td>
                      <TiDeleteOutline className="icon-delete" size={23} />
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
