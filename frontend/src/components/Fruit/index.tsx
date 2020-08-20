import React from 'react';
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';

export const Fruit: React.FC = () => {
  return (
    <Container className="justify-content-center">
      <Row>
        <Col className="text-center">
          <h2 style={{ margin: '50px' }}>果物マスタ管理</h2>
          <Breadcrumb>
            <Breadcrumb.Item href="#">TOP</Breadcrumb.Item>
            <Breadcrumb.Item active>果物マスタ管理</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
    </Container>
  );
};
