import React, { useState } from 'react';
import {
  useAccesTokenContext,
  useRefreshTokenContext,
  useUserContext,
} from './Context';
import {
  AccessTokenActionType,
  RefreshTokenActionType,
  UserActionType,
} from './Action';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { DefaultApi } from './Api';
import { useHistory } from 'react-router-dom';

export const Login: React.FC = () => {
  const url = 'http://localhost:8000';
  const api = new DefaultApi(url);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { access, dispatchAccessToken } = useAccesTokenContext();
  const { refresh, dispatchRefreshToken } = useRefreshTokenContext();
  const { dispatchUsername } = useUserContext();
  const history = useHistory();

  const handleOnChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleOnChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await api.login(username, password);
      if (response.status !== 200) {
        throw new Error(
          `statusCode: $response.status, message: $response.statusText`
        );
      }
      const accessToken = response.data.access;
      const refreshToken = response.data.refresh;

      dispatchAccessToken({
        type: AccessTokenActionType.ADD,
        payload: accessToken,
      });
      dispatchRefreshToken({
        type: RefreshTokenActionType.ADD,
        payload: refreshToken,
      });
      dispatchUsername({
        type: UserActionType.ADD,
        payload: username,
      });

      history.push('/top');
    } catch (err) {
      throw err;
    }
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
