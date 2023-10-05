import { RootState } from '../store';

export const getDriversSelector = (state: RootState) => state.drivers.drivers;
