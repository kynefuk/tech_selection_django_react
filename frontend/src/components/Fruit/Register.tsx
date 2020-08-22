import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { useApi } from '../../api/useApi';
import { useAccessTokenContext } from '../../Context';

export const Register: React.FC = () => {
  const url = process.env.REACT_APP_SERVER_URL || 'http://localhost:8000';
  const { api } = useApi(url);
  const { access } = useAccessTokenContext();
  const history = useHistory();
  // const { id } = useParams();
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
  };

  const handleOnChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setPrice(value);
  };

  const handleOnSubmit = () => {
    try {
      const response = api.registerFruit(access, { name, price });
      history.push('/fruits/');
    } catch (error) {}
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={6}>
          <h2>果物登録</h2>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mt-3">
              <Form.Label>名称</Form.Label>
              <Form.Control
                type="text"
                placeholder="名称"
                onChange={handleOnChangeName}
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>価格</Form.Label>
              <Form.Control
                type="number"
                placeholder="価格"
                onChange={handleOnChangePrice}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              登録
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
