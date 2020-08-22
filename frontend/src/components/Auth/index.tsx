import React, { useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import {
  useAccessTokenContext,
  useRefreshTokenContext,
  useUserContext,
} from '../../Context';
import { AccessTokenActionType, UserActionType } from '../../Action';
import { DefaultApi } from '../../api/index';

export const Auth: React.FC = ({ children }) => {
  const url = process.env.REACT_APP_SERVER_URL || '';
  const api = new DefaultApi(url);
  const history = useHistory();
  const { access, dispatchAccessToken } = useAccessTokenContext();
  const { refresh } = useRefreshTokenContext();
  const { dispatchUsername } = useUserContext();

  const verifyToken = useCallback(
    async (accessToken: string) => {
      return await api.verifyToken(accessToken);
    },
    [api]
  );

  const refreshAccessToken = useCallback(async () => {
    const response = await api.refreshAccessToken(refresh);
    dispatchAccessToken({
      type: AccessTokenActionType.ADD,
      payload: response.data.access,
    });
  }, [api, refresh, dispatchAccessToken]);

  useEffect(() => {
    const f = async () => {
      try {
        await verifyToken(access);
      } catch (error) {
        try {
          await verifyToken(refresh);
          await refreshAccessToken();
        } catch (error) {
          dispatchUsername({
            type: UserActionType.DELETE,
            payload: '',
          });
          history.push('/login');
        }
      }
    };
    f();
  }, [
    access,
    dispatchUsername,
    history,
    refresh,
    refreshAccessToken,
    verifyToken,
  ]);

  return <>{children}</>;
};
