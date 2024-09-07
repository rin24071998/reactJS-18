import httpClient from '@services/axios.config';
class UsersApis {
  getUsersList = (request: any) =>
    httpClient.get('/users', {
      params: request,
    });
}

export const UsersApi = new UsersApis();
