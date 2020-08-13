import axios, { AxiosInstance } from 'axios';

export class DefaultApi {
  url: string;
  instance: AxiosInstance;
  constructor(url: string) {
    this.url = url;
    this.instance = axios.create({
      baseURL: url,
      timeout: 1000,
      headers: { 'Content-Type': 'applilcation/json' },
      withCredentials: true,
    });
  }

  async login(username: string, password: string) {
    const url = 'api/token/';
    const data = {
      username: username,
      password: password,
    };

    const response = await this.instance.post(url, data);
    return response.data.access!;
  }

  async admin() {
    const response = await this.instance.get('admin/');
    return response.data;
  }
}
