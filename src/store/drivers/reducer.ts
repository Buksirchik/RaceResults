import { Driver } from '../../types';
import { ActionType, DriversActions } from './actions';

type State = {
  drivers: Driver[];
  loading: boolean;
  refreshing: boolean;
  currentPage: number;
  totalPages: number;
};

const initialState = {
  drivers: [],
  loading: false,
  refreshing: false,
  currentPage: 0,
  totalPages: 0,
};

export const driversReducer = (state: State = initialState, action: DriversActions) => {
  switch (action.type) {
    case ActionType.GET_DRIVERS_LOADING: {
      return {
        ...state,
        loading: !state.loading,
      };
    }
    case ActionType.GET_DRIVERS_REFRESHING: {
      return {
        ...state,
        refreshing: !state.refreshing,
      };
    }
    case ActionType.GET_DRIVERS_SUCCESS: {
      const drivers = state.refreshing ? [...action.payload.drivers] : [...state.drivers, ...action.payload.drivers];

      return {
        ...state,
        drivers,
        loading: false,
        refreshing: false,
        currentPage: action.payload.currentPage,
        totalPages: action.payload.totalPages,
      };
    }
    default: {
      return state;
    }
  }
};
