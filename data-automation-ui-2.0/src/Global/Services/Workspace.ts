/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiResponseParser, axiosInstance } from '../AxiosInstance';
import { BASE_URL } from '../Constants';

export const getAllWorkspaces = () =>
  axiosInstance
    .get(`${BASE_URL}/workspace/get/all/workspaces`)
    .then((response) => apiResponseParser(response))
    .catch((error) => apiResponseParser(error.response));

export const createWorkspace = (payload: any) =>
  axiosInstance
    .post(`${BASE_URL}/workspace/create/new/workspace`, payload)
    .then((response) => apiResponseParser(response))
    .catch((error) => apiResponseParser(error.response));
