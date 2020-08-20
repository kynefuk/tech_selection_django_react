import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

export const TopPage: React.FC = () => {
  return (
    <Container className="justify-content-center">
      <Row>
        <Col className="text-center">
          <h2 style={{ margin: '50px' }}>管理TOP</h2>
          <Link to={'/fruits/'} style={{ display: 'block', margin: '20px' }}>
            果物マスタ管理
          </Link>
          <Link to={'/sales/'} style={{ display: 'block', margin: '20px' }}>
            販売情報管理
          </Link>
          <Link to={'/sold/'} style={{ display: 'block', margin: '20px' }}>
            販売統計情報
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
