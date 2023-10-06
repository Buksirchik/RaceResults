import { Driver } from '../../types';

export enum ActionType {
  GET_DRIVERS_LOADING = 'DRIVERS/GET_DRIVERS_LOADING',
  GET_DRIVERS_REFRESHING = 'DRIVERS/GET_DRIVERS_REFRESHING',
  GET_DRIVERS_SUCCESS = 'DRIVERS/GET_DRIVERS_SUCCESS',
}

type GetDriversLoadingAction = { type: ActionType.GET_DRIVERS_LOADING };

type GetDriversRefreshingAction = { type: ActionType.GET_DRIVERS_REFRESHING };

type GetDriversSuccessAction = {
  type: ActionType.GET_DRIVERS_SUCCESS;
  payload: {
    drivers: Driver[];
    currentPage: number;
    totalPages: number;
  };
};

export const getDriversLoadingAction = (): GetDriversLoadingAction => ({ type: ActionType.GET_DRIVERS_LOADING });

export const getDriversRefreshingAction = (): GetDriversRefreshingAction => ({
  type: ActionType.GET_DRIVERS_REFRESHING,
});

export const getDriversSuccessAction = (payload: GetDriversSuccessAction['payload']): GetDriversSuccessAction => ({
  type: ActionType.GET_DRIVERS_SUCCESS,
  payload,
});

export type DriversActions = GetDriversLoadingAction | GetDriversSuccessAction | GetDriversRefreshingAction;
