import { getDriversLoadingAction, getDriversRefreshingAction, getDriversSuccessAction } from './actions';
import { DEFAULT_COUNT_OF_DRIVERS_PER_PAGE } from '../../constants';
import { AppThunkAction } from '../types';

export const loadDrivers =
  (isInitialLoading?: boolean): AppThunkAction =>
  async (dispatch, getState, { api }) => {
    try {
      const state = getState();

      if (state.driversState.drivers.length && isInitialLoading) {
        // there's cached values, we don't need to fetch it again
        return;
      }

      dispatch(getDriversLoadingAction());

      const currentPage = state.driversState.currentPage;
      const offset = currentPage * DEFAULT_COUNT_OF_DRIVERS_PER_PAGE;

      const response = await api.drivers.getDrivers({ offset });

      const data = response.data.MRData;

      const payload = {
        drivers: data.DriverTable.Drivers,
        currentPage: Number(data.offset) / DEFAULT_COUNT_OF_DRIVERS_PER_PAGE + 1,
        totalPages: Number(data.total) / DEFAULT_COUNT_OF_DRIVERS_PER_PAGE,
      };

      dispatch(getDriversSuccessAction(payload));
    } catch (e) {
      console.error(e);
      dispatch(getDriversLoadingAction());
    }
  };

export const refreshDrivers =
  (): AppThunkAction =>
  async (dispatch, _, { api }) => {
    try {
      dispatch(getDriversRefreshingAction());

      const response = await api.drivers.getDrivers();

      const data = response.data.MRData;

      const payload = {
        drivers: data.DriverTable.Drivers,
        currentPage: Number(data.offset) / DEFAULT_COUNT_OF_DRIVERS_PER_PAGE + 1,
        totalPages: Number(data.total) / DEFAULT_COUNT_OF_DRIVERS_PER_PAGE,
      };

      dispatch(getDriversSuccessAction(payload));
    } catch (e) {
      console.error(e);
      dispatch(getDriversRefreshingAction());
    }
  };
