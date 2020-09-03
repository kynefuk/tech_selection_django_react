import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Table,
  Button,
  Alert,
} from 'react-bootstrap';
import { useFruits } from './useFruits';
import { useApi } from '../../api/useApi';
import { useAccessTokenContext } from '../../Context';
import { Link } from 'react-router-dom';

export const Fruit: React.FC = () => {
  const url = process.env.REACT_APP_SERVER_URL || 'http://localhost:8000';
  const { api } = useApi(url);
  const { access } = useAccessTokenContext();
  const { fruits, setFruits } = useFruits(url);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleOnDelete = async (fruitId: number) => {
    try {
      const response = await api.deleteFruit(access, fruitId);
      if (response.status === 204) {
        setMessage('削除しました');
        setFruits(fruits.filter((fruit) => fruit.id !== fruitId));
      }
    } catch (err) {
      setError('削除に失敗しました');
      console.log(err);
    }
  };

  return (
    <Container className="justify-content-center">
      <Row>
        <Col className="text-center">
          <h2 style={{ margin: '50px' }}>果物マスタ管理</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">TOP</Breadcrumb.Item>
            <Breadcrumb.Item active>果物マスタ管理</Breadcrumb.Item>
          </Breadcrumb>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>名称</th>
                <th>単価</th>
                <th>登録日時</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {fruits.map((fruit) => {
                return (
                  <tr key={fruit.id}>
                    <td>{fruit.id}</td>
                    <td>{fruit.name}</td>
                    <td>{fruit.price}</td>
                    <td>{fruit.created_at}</td>
                    <td>
                      <Link
                        to={{
                          pathname: `/fruits/${fruit.id}`,
                          state: { fruit },
                        }}
                      >
                        <Button style={{ marginRight: 10 }}>編集</Button>
                      </Link>
                      <Button
                        style={{ marginLeft: 10 }}
                        variant="danger"
                        onClick={() => {
                          handleOnDelete(fruit.id);
                        }}
                      >
                        削除
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Button variant="outline-secondary">
            <Link to={'/fruits/new'}>新規追加</Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
