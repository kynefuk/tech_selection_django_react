import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAccessTokenContext, useRefreshTokenContext } from './Context';
import { AccessTokenActionType } from './Action';
import { DefaultApi } from './Api';

export const Auth: React.FC = ({ children }) => {
  const url = process.env.REACT_APP_SERVER_URL || '';
  const api = new DefaultApi(url);
  const { access, dispatchAccessToken } = useAccessTokenContext();
  const { refresh } = useRefreshTokenContext();

  const verify = async (token: string) => {
    const response = await api.verifyToken(token);
    console.log(response);
    return response;
  };

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
    const isAccessTokenVerified = verify(access);
    const isRefreshTokenVerified = verify(refresh);
    console.log('hoooo');

    if (isAccessTokenVerified) {
      return <>{children}</>;
    }
    if (isRefreshTokenVerified) {
      refreshAccessToken();
      return <>{children}</>;
    }
    return <Redirect to={'/login'} />;
  };

  return <Sample />;
};
