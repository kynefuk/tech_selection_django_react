import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import { AccessTokenType, FruitType, LoginType } from '../types/ResponseType';

export class DefaultApi {
  url: string;
  instance: AxiosInstance;
  constructor(url: string) {
    this.url = url;
    this.instance = axios.create({
      baseURL: url,
      timeout: 1000,
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
  }

  async login(
    username: string,
    password: string
  ): Promise<AxiosResponse<LoginType>> {
    const url = '/api/token/';
    const data = {
      username: username,
      password: password,
    };
    return await this.instance.post(url, data);
  }

  async verifyToken(accessToken: string) {
    const url = '/api/token/verify/';
    const data = {
      token: accessToken,
    };
    return await this.instance.post(url, data);
  }

  async refreshAccessToken(
    refreshToken: string
  ): Promise<AxiosResponse<AccessTokenType>> {
    const url = '/api/token/refresh/';
    const data = {
      refresh: refreshToken,
    };
    return await this.instance.post(url, data);
  }

  async getFruitsList(
    accessToken: string
  ): Promise<AxiosResponse<FruitType[]>> {
    const url = '/fruits/';
    const config: AxiosRequestConfig = {
      headers: {
        Authorization: 'JWT ' + accessToken,
      },
    };
    return await this.instance.get(url, config);
  }
}
