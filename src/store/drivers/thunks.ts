import { AppThunkAction } from '../store';
import { getDriversLoadingAction, getDriversSuccessAction } from './actions';
import { DEFAULT_COUNT_OF_DRIVERS_PER_PAGE } from '../../constants';

export const loadDrivers =
  (): AppThunkAction =>
  async (dispatch, getState, { api }) => {
    const state = getState();

    dispatch(getDriversLoadingAction());

    const currentPage = state.drivers.currentPage;
    const offset = currentPage * DEFAULT_COUNT_OF_DRIVERS_PER_PAGE;

    const response = await api.drivers.getDrivers({ offset });

    const data = response.data.MRData;

    const payload = {
      drivers: data.DriverTable.Drivers,
      currentPage: Number(data.offset) / DEFAULT_COUNT_OF_DRIVERS_PER_PAGE + 1,
      totalPages: Number(data.total) / DEFAULT_COUNT_OF_DRIVERS_PER_PAGE,
    };

    dispatch(getDriversSuccessAction(payload));
  };
