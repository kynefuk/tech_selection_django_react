import { AccessTokenActionType, AccessTokenAction } from './Action';

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
