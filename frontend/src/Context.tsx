import React, { useState, useContext, useReducer } from 'react';
import { AccessTokenAction, RefreshTokenAction } from './Action';
import { AccessTokenReducer } from './Reducer';

export type AccessTokenContextType = {
  access: string;
  dispatch: React.Dispatch<AccessTokenAction>;
};

const initialAccessTokenValue = {
  access: '',
  dispatch: () => {},
};

export type RefreshTokenContextType = {
  refresh: string;
  setRefreshToken: React.Dispatch<RefreshTokenAction>;
};

const initialRefreshTokenValue = {
  refresh: '',
  setRefreshToken: () => {},
};

export type UserContextType = {
  username: string;
  setUsername: React.Dispatch<RefreshTokenAction>;
};

const initialUserValue = {
  username: '',
  setUsername: () => {},
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
  const [access, dispatch] = useReducer(AccessTokenReducer, '');

  return (
    <AccessTokenContext.Provider value={{ access, dispatch }}>
      <UserContext.Provider value={{ userState, setUser }}>
        {children}
      </UserContext.Provider>
    </AccessTokenContext.Provider>
  );
};
