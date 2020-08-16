import {
  AccessTokenActionType,
  AccessTokenAction,
  RefreshTokenActionType,
  RefreshTokenAction,
  UserActionType,
  UserAction,
} from './Action';

export const AccessTokenReducer = (
  state: string = '',
  action: AccessTokenAction
) => {
  switch (action.type) {
    case AccessTokenActionType.ADD:
      const access = action.payload;
      localStorage.setItem('access', access);
      return access;
    case AccessTokenActionType.DELETE:
      localStorage.removeItem('access');
      return '';
    default:
      return state;
  }
};

export const RefreshTokenReducer = (
  state: string = '',
  action: RefreshTokenAction
) => {
  switch (action.type) {
    case RefreshTokenActionType.ADD:
      const refresh = action.payload;
      localStorage.setItem('refresh', refresh);
      return action.payload;
    case RefreshTokenActionType.DELETE:
      localStorage.removeItem('refresh');
      return '';
    default:
      return state;
  }
};

export const UserReducer = (state: string = '', action: UserAction) => {
  switch (action.type) {
    case UserActionType.ADD:
      const username = action.payload;
      localStorage.setItem('username', username);
      return username;
    case UserActionType.DELETE:
      localStorage.removeItem('username');
      return '';
    default:
      return state;
  }
};
