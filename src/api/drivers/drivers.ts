import { axiosInstance } from '../axios';
import { Driver } from '../../types';
import { GetDriverByIdResponse, GetDriversResponse } from './types';

export const getDriverById = (driverId: Driver['driverId']) =>
  axiosInstance.get<GetDriverByIdResponse>(`/drivers/${driverId}`);

export const getDrivers = () => axiosInstance.get<GetDriversResponse>('f1/drivers.json');
