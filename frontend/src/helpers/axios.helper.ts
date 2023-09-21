import axios, { AxiosRequestConfig } from 'axios';

enum AxiosMethod {
   GET = 'GET',
   POST = 'POST',
   PUT = 'PUT',
   DELETE = 'DELETE',
}

// eslint-disable-next-line import/prefer-default-export
export const axiosRequest = (
   url: string,
   method: AxiosMethod = AxiosMethod.GET,
   token = '',
   params: unknown = null,
   data: unknown = null
) => {
   const axiosConfig: AxiosRequestConfig = {
      url,
      method,
      headers: {},
      params,
   };

   if (token) {
      // axiosConfig.headers.Authorization = `Bearer ${token}`;
   }

   axiosConfig.data = data;

   return axios(axiosConfig);
};
