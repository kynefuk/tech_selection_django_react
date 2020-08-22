import dayjs from 'dayjs';

export interface FruitType {
  id: number;
  created_at: dayjs.Dayjs;
  updated_at: dayjs.Dayjs;
  name: string;
  price: number;
}

export interface AccessTokenType {
  access: string;
}

export interface RefreshTokenType {
  refresh: string;
}

export type LoginType = AccessTokenType & RefreshTokenType;
