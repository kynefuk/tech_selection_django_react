import React, { useContext, useReducer } from 'react';
import { AccessTokenAction, RefreshTokenAction, UserAction } from './Action';
import {
  AccessTokenReducer,
  RefreshTokenReducer,
  UserReducer,
} from './Reducer';

export type AccessTokenContextType = {
  access: string;
  dispatchAccessToken: React.Dispatch<AccessTokenAction>;
};

export type RefreshTokenContextType = {
  refresh: string;
  dispatchRefreshToken: React.Dispatch<RefreshTokenAction>;
};

export type UserContextType = {
  username: string;
  dispatchUsername: React.Dispatch<UserAction>;
};

export const AccessTokenContext = React.createContext<AccessTokenContextType>({
  access: localStorage.getItem('access') || '',
  dispatchAccessToken: () => {},
});

export const RefreshTokenContext = React.createContext<RefreshTokenContextType>(
  {
    refresh: localStorage.getItem('refresh') || '',
    dispatchRefreshToken: () => {},
  }
);

export const UserContext = React.createContext<UserContextType>({
  username: localStorage.getItem('username') || '',
  dispatchUsername: () => {},
});

export const useAccessTokenContext = () => {
  return useContext(AccessTokenContext);
};

export const useRefreshTokenContext = () => {
  return useContext(RefreshTokenContext);
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export const AppContext: React.FC = ({ children }) => {
  const storedAccessToken = localStorage.getItem('access') || '';
  const storedRefreshToken = localStorage.getItem('refresh') || '';
  const storedUsername = localStorage.getItem('username') || '';
  const [access, dispatchAccessToken] = useReducer(
    AccessTokenReducer,
    storedAccessToken
  );
  const [refresh, dispatchRefreshToken] = useReducer(
    RefreshTokenReducer,
    storedRefreshToken
  );
  const [username, dispatchUsername] = useReducer(UserReducer, storedUsername);

  return (
    <AccessTokenContext.Provider value={{ access, dispatchAccessToken }}>
      <RefreshTokenContext.Provider value={{ refresh, dispatchRefreshToken }}>
        <UserContext.Provider value={{ username, dispatchUsername }}>
          {children}
        </UserContext.Provider>
      </RefreshTokenContext.Provider>
    </AccessTokenContext.Provider>
  );
};
