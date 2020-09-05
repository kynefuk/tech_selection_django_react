import React, { useState } from 'react';
import { useHistory, useLocation, Route } from 'react-router-dom';
import dayjs from 'dayjs';
import {
  Form as BootStrapForm,
  Container,
  Row,
  Col,
  Button,
  Alert,
} from 'react-bootstrap';
import { useApi } from '../../api/useApi';
import { useAccessTokenContext } from '../../Context';
import { FruitResponseType } from '../../types/AxiosType';
import { RouteComponentProps } from 'react-router-dom';
import { Location } from 'history';
import { StaticContext } from 'react-router';

interface LocationState {
  fruit: FruitResponseType;
}

export const Form: React.FC<RouteComponentProps<
  {},
  StaticContext,
  LocationState
>> = (props) => {
  const url = process.env.REACT_APP_SERVER_URL || 'http://localhost:8000';
  const { api } = useApi(url);
  const { access } = useAccessTokenContext();
  const history = useHistory();
  const location = props.location;

  let fruit: FruitResponseType = {
    id: NaN,
    name: '',
    price: 0,
    created_at: dayjs(),
    updated_at: dayjs(),
  };
  if (props.location.state !== undefined) {
    fruit = props.location.state.fruit;
  }

  const [name, setName] = useState(fruit.name);
  const [price, setPrice] = useState(fruit.price);
  const [error, setError] = useState('');

  const handleOnChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setName(value);
  };

  const handleOnChangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setPrice(value);
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      const response = await api.registerFruit(access, { name, price });
      if (response.status === 201) {
        history.push('/fruits/');
      }
    } catch (err) {
      setError('エラー');
      console.log(err);
    }
  };

  const handleOnUpdate = async (
    e: React.FormEvent<HTMLElement>,
    fruitId: number
  ) => {
    e.preventDefault();
    try {
      const response = await api.updateFruit(access, fruitId, { name, price });
      if (response.status === 200) {
        history.push('/fruits/');
      }
    } catch (err) {
      setError('エラー');
      console.log(err);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col xs={6}>
          <h2>果物登録</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {location.pathname === '/fruits/new' ? (
            <BootStrapForm
              onSubmit={async (e: React.FormEvent<HTMLElement>) =>
                await handleOnSubmit(e)
              }
            >
              <BootStrapForm.Group className="mt-3">
                <BootStrapForm.Label>名称</BootStrapForm.Label>
                <BootStrapForm.Control
                  type="text"
                  placeholder="名称"
                  value={name}
                  onChange={handleOnChangeName}
                />
              </BootStrapForm.Group>
              <BootStrapForm.Group className="mt-3">
                <BootStrapForm.Label>価格</BootStrapForm.Label>
                <BootStrapForm.Control
                  type="number"
                  placeholder="価格"
                  value={price}
                  onChange={handleOnChangePrice}
                />
              </BootStrapForm.Group>
              <Button variant="primary" type="submit" className="mt-3">
                登録
              </Button>
            </BootStrapForm>
          ) : (
            <BootStrapForm
              onSubmit={async (e: React.FormEvent<HTMLElement>) =>
                await handleOnUpdate(e, fruit.id)
              }
            >
              <BootStrapForm.Group className="mt-3">
                <BootStrapForm.Label>名称</BootStrapForm.Label>
                <BootStrapForm.Control
                  type="text"
                  placeholder="名称"
                  value={name}
                  onChange={handleOnChangeName}
                />
              </BootStrapForm.Group>
              <BootStrapForm.Group className="mt-3">
                <BootStrapForm.Label>価格</BootStrapForm.Label>
                <BootStrapForm.Control
                  type="number"
                  placeholder="価格"
                  value={price}
                  onChange={handleOnChangePrice}
                />
              </BootStrapForm.Group>
              <Button variant="primary" type="submit" className="mt-3">
                更新
              </Button>
            </BootStrapForm>
          )}
        </Col>
      </Row>
    </Container>
  );
};
