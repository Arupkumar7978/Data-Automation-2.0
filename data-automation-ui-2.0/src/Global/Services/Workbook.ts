/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiResponseParser, axiosInstance } from '../AxiosInstance';
import { BASE_URL } from '../Constants';

export const getAllWorkbooks = () =>
  axiosInstance
    .get(`${BASE_URL}/workbook/getAllWorkbooks`)
    .then((response) => apiResponseParser(response))
    .catch((error) => apiResponseParser(error.response));

export const createWorkbook = (payload: any) =>
  axiosInstance
    .post(`${BASE_URL}/workbook/create/newWorkbook`, payload)
    .then((response) => apiResponseParser(response))
    .catch((error) => apiResponseParser(error.response));
