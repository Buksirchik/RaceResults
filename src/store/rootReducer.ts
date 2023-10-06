import { combineReducers } from 'redux';
import { driversReducer } from './drivers';
import { raceScheduleReducer } from './raceSchedule';

export const rootReducer = combineReducers({
  driversState: driversReducer,
  raceScheduleState: raceScheduleReducer,
});
