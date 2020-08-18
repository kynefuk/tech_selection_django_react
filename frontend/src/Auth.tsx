import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAccessTokenContext, useRefreshTokenContext } from './Context';
import { AccessTokenActionType } from './Action';
import { DefaultApi } from './Api';

export const Auth: React.FC = ({ children }) => {
  const url = process.env.REACT_APP_SERVER_URL || '';
  const api = new DefaultApi(url);
  const history = useHistory();
  const { access, dispatchAccessToken } = useAccessTokenContext();
  const { refresh } = useRefreshTokenContext();

  const verifyToken = async (accessToken: string) => {
    return await api.verifyToken(accessToken);
  };

  const refreshAccessToken = async () => {
    try {
      const response = await api.refreshAccessToken(refresh);
      dispatchAccessToken({
        type: AccessTokenActionType.ADD,
        payload: response.data.access,
      });
    } catch (error) {
      history.push('/login');
    }
  };

  useEffect(() => {
    const f = async () => {
      try {
        await verifyToken(access);
      } catch (error) {
        try {
          await verifyToken(refresh);
          await refreshAccessToken();
        } catch (error) {
          history.push('/login');
        }
      }
    };
    f();
  }, []);

  return <>{children}</>;
};
