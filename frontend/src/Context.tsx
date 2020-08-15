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

const initialAccessTokenValue = {
  access: '',
  dispatchAccessToken: () => {},
};

export type RefreshTokenContextType = {
  refresh: string;
  dispatchRefreshToken: React.Dispatch<RefreshTokenAction>;
};

const initialRefreshTokenValue = {
  refresh: '',
  dispatchRefreshToken: () => {},
};

export type UserContextType = {
  username: string;
  dispatchUsername: React.Dispatch<UserAction>;
};

const initialUserValue = {
  username: '',
  dispatchUsername: () => {},
};

export const AccessTokenContext = React.createContext<AccessTokenContextType>(
  initialAccessTokenValue
);

export const RefreshTokenContext = React.createContext<RefreshTokenContextType>(
  initialRefreshTokenValue
);

export const UserContext = React.createContext<UserContextType>(
  initialUserValue
);

export const useAccesTokenContext = () => {
  return useContext(AccessTokenContext);
};

export const useRefreshTokenContext = () => {
  return useContext(RefreshTokenContext);
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export const AppContext: React.FC = ({ children }) => {
  const [access, dispatchAccessToken] = useReducer(AccessTokenReducer, '');
  const [refresh, dispatchRefreshToken] = useReducer(RefreshTokenReducer, '');
  const [username, dispatchUsername] = useReducer(UserReducer, '');

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
