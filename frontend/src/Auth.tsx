import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useAccessTokenContext, useRefreshTokenContext } from './Context';
import {
  AccessTokenActionType,
  AccessTokenAction,
  RefreshTokenAction,
} from './Action';
import { DefaultApi } from './Api';

type verifyTokenType = {
  token: string;
  dispatch:
    | React.Dispatch<AccessTokenAction>
    | React.Dispatch<RefreshTokenAction>;
};

export const Auth: React.FC = ({ children }) => {
  const url = process.env.REACT_APP_SERVER_URL || '';
  const api = new DefaultApi(url);
  const { access, dispatchAccessToken } = useAccessTokenContext();
  const { refresh, dispatchRefreshToken } = useRefreshTokenContext();
  const [isAccessTokenVerified, setAccessTokenVerified] = useState(false);
  const [isRefreshTokenVerified, setRefreshTokenVerified] = useState(false);

  useEffect(() => {
    const verifyToken = async ({ token, dispatch }: verifyTokenType) => {
      const response = await api.verifyToken(token);
      dispatch({
        type: AccessTokenActionType.ADD,
        payload: token,
      });
      console.log(response);
    };
    verifyToken(access, dispatchAccessToken);
    verifyToken(refresh, dispatchRefreshToken);
  }, []);

  const refreshAccessToken = async () => {
    console.log('refreshAccessToken called');
    const access = await api.refreshAccessToken(refresh);
    console.log(access);
    dispatchAccessToken({
      type: AccessTokenActionType.ADD,
      payload: access,
    });
  };

  const Sample = () => {
    return <Redirect to={'/login'} />;
  };

  return <Sample />;
};
