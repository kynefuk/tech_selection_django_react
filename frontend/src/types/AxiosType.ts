import dayjs from 'dayjs';

export interface FruitResponseType {
  id: number;
  created_at: dayjs.Dayjs;
  updated_at: dayjs.Dayjs;
  name: string;
  price: number;
}

export interface AccessTokenResponseType {
  access: string;
}

export interface RefreshTokenResponseType {
  refresh: string;
}

export type LoginResponseType = AccessTokenResponseType &
  RefreshTokenResponseType;

export interface FruitRegisterRequestType {
  name: string;
  price: number;
}
