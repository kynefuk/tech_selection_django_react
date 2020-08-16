import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUserContext } from './Context';

export const Auth: React.FC = ({ children }) => {
  const { username } = useUserContext();

  if (username) {
    return <>{children}</>;
  }
  return <Redirect to={'/login'} />;
};
