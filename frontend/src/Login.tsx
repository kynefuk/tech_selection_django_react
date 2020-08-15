import React, { useState, useContext } from 'react';
import { tokenContext, userContext } from './Context';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { DefaultApi } from './Api';

export const Login: React.FC = () => {
  const url = 'http://localhost:8000';
  const api = new DefaultApi(url);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const token = useContext(tokenContext);
  const user = useContext(userContext);

  const handleOnChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleOnChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await api.login(username, password);
    const accessToken = response.data.access;
    const refreshToken = response.data.refresh;
  };

  return (
    <Container className='mt-5'>
      <Row className='justify-content-md-center'>
        <Col xs={6}>
          <h2>ログイン</h2>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group controlId='formBasicUserName'>
              <Form.Label>ユーザ名</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter username'
                onChange={handleOnChangeUsername}
              />
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
              <Form.Label>パスワード</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                onChange={handleOnChangePassword}
              />
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
