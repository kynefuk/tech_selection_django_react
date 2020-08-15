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
      const token = action.payload;
      return token;
    case AccessTokenActionType.DELETE:
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
      return action.payload;
    case RefreshTokenActionType.DELETE:
      return '';
    default:
      return state;
  }
};

export const UserReducer = (state: string = '', action: UserAction) => {
  switch (action.type) {
    case UserActionType.ADD:
      return action.payload;
    case UserActionType.DELETE:
      return '';
    default:
      return state;
  }
};
