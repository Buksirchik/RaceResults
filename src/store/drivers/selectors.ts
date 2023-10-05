import { RootState } from '../store';

export const driversSelector = (state: RootState) => state.drivers.drivers;
export const driversLoadingSelector = (state: RootState) => state.drivers.loading;
