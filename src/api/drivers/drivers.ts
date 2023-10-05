import { axiosInstance } from '../axios';
import { GetDriversParams, GetDriversResponse } from './types';

export const getDrivers = (params?: GetDriversParams) =>
  axiosInstance.get<GetDriversResponse>('f1/drivers.json', { params });
