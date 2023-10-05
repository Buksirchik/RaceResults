import { AppThunkAction } from '../store';
import { getDriversLoadingAction, getDriversSuccessAction } from './actions';

export const loadDrivers =
  (): AppThunkAction =>
  async (dispatch, _, { api }) => {
    dispatch(getDriversLoadingAction());

    const response = await api.drivers.getDrivers();

    dispatch(getDriversSuccessAction({ drivers: response.data.MRData.DriverTable.Drivers }));
  };
