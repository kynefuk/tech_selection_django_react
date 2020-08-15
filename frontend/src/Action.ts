export enum AccessTokenActionType {
  ADD = 'ADD',
  DELETE = 'DELETE',
}

export enum RefreshTokenActionType {
  ADD = 'ADD',
  DELETE = 'DELETE',
}

export type AccessTokenAction = {
  type: AccessTokenActionType;
  payload: string;
};

export type RefreshTokenAction = {
  type: RefreshTokenActionType;
  payload: string;
};
