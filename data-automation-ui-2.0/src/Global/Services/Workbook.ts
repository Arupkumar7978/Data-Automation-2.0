import { apiResponseParser, axiosInstance } from '../AxiosInstance';
import { BASE_URL } from '../Constants';

export const getAllWorkbooks = () =>
  axiosInstance
    .get(`${BASE_URL}/workbook/getAllWorkbooks`)
    .then((response) => apiResponseParser(response))
    .catch((error) => apiResponseParser(error.response));
