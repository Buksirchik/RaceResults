import { Driver } from '../../types';
import { RootState } from '../types';

export const driversStateSelector = (state: RootState) => state.driversState;
export const getDriverByIdSelector = (state: RootState, driverId: Driver['driverId']) =>
  driversStateSelector(state).drivers.find(driver => driver.driverId === driverId);
