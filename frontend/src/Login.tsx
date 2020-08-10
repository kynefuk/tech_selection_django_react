import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export const Login: React.FC = () => {
  return (
    <Container className='mt-5'>
      <Row className='justify-content-md-center'>
        <Col xs={6}>
          <h2>ログイン</h2>
          <Form>
            <Form.Group controlId='formBasicUserName'>
              <Form.Label>ユーザ名</Form.Label>
              <Form.Control type='text' placeholder='Enter username' />
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>パスワード</Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
