import { axiosInstance } from '../axios';
import { GetRaceScheduleResponse } from './types';

export const getRaceSchedule = () =>
  axiosInstance.get<GetRaceScheduleResponse>('https://ergast.com/api/f1/current.json');
