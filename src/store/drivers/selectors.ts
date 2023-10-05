import { RootState } from '../store';

export const driversSelector = (state: RootState) => state.drivers.drivers;
export const driversLoadingSelector = (state: RootState) => state.drivers.loading;
export const driversCurrentPageSelector = (state: RootState) => state.drivers.currentPage;
export const driversTotalPagesSelector = (state: RootState) => state.drivers.totalPages;
