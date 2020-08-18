import axios, { AxiosInstance } from 'axios';

// axios.interceptors.response.use((response) => {
//   if (response.status !== 200) {

//   }
// })

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

  async login(username: string, password: string) {
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

  async refreshAccessToken(refreshToken: string) {
    const url = '/api/token/refresh/';
    const data = {
      refresh: refreshToken,
    };
    return await this.instance.post(url, data);
  }
}
