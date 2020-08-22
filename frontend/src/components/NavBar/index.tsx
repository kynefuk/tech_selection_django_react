import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {
  useUserContext,
  useAccessTokenContext,
  useRefreshTokenContext,
} from '../../Context';
import {
  UserActionType,
  AccessTokenActionType,
  RefreshTokenActionType,
} from '../../Action';
import { useHistory } from 'react-router-dom';

export const AppBar = () => {
  const history = useHistory();
  const { username, dispatchUsername } = useUserContext();
  const { dispatchAccessToken } = useAccessTokenContext();
  const { dispatchRefreshToken } = useRefreshTokenContext();

  const handleOnClick = () => {
    dispatchAccessToken({
      type: AccessTokenActionType.DELETE,
      payload: '',
    });
    dispatchRefreshToken({
      type: RefreshTokenActionType.DELETE,
      payload: '',
    });
    dispatchUsername({
      type: UserActionType.DELETE,
      payload: '',
    });
    history.push('/login');
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#">Sample</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          {username ? (
            <NavDropdown title={username} id="sample-nav-dropdown">
              <NavDropdown.Item href="#" onClick={handleOnClick}>
                SignOut
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <></>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
