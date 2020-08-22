import React from 'react';
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  Table,
  Button,
} from 'react-bootstrap';
import { useFruits } from './useFruits';
import { Link } from 'react-router-dom';

export const Fruit: React.FC = () => {
  const url = process.env.REACT_APP_SERVER_URL || 'http://localhost:8000';
  const { fruits } = useFruits(url);

  return (
    <Container className="justify-content-center">
      <Row>
        <Col className="text-center">
          <h2 style={{ margin: '50px' }}>果物マスタ管理</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">TOP</Breadcrumb.Item>
            <Breadcrumb.Item active>果物マスタ管理</Breadcrumb.Item>
          </Breadcrumb>
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
                      <Link to={'#'}>編集</Link>/<Link to={'#'}>削除</Link>
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
