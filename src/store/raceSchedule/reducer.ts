import { Race } from '../../types';
import { ActionType, RaceScheduleActions } from './actions';

type State = {
  raceSchedule: Race[];
  loading: boolean;
  refreshing: boolean;
};

const initialState = {
  raceSchedule: [],
  loading: false,
  refreshing: false,
};

export const raceScheduleReducer = (state: State = initialState, action: RaceScheduleActions) => {
  switch (action.type) {
    case ActionType.GET_RACE_SCHEDULE_LOADING: {
      return {
        ...state,
        loading: !state.loading,
      };
    }
    case ActionType.GET_RACE_SCHEDULE_REFRESHING_SUCCESS: {
      return {
        ...state,
        refreshing: !state.refreshing,
      };
    }
    case ActionType.GET_RACE_SCHEDULE_SUCCESS: {
      return {
        ...state,
        raceSchedule: [...action.payload.raceSchedule],
        loading: false,
        refreshing: false,
      };
    }
    default: {
      return state;
    }
  }
};
