import { Driver } from '../../types';
import { ActionType, DriversActions } from './actions';

type State = {
  drivers: Driver[];
  loading: boolean;
  currentPage: number;
  totalPages: number;
};

const initialState = {
  drivers: [],
  loading: false,
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
    case ActionType.GET_DRIVERS_SUCCESS: {
      return {
        ...state,
        drivers: [...state.drivers, ...action.payload.drivers],
        currentPage: action.payload.currentPage,
        totalPages: action.payload.totalPages,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
