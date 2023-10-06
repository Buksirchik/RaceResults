import { getRaceScheduleLoadingAction, getRaceScheduleSuccessAction } from './actions';
import { AppThunkAction } from '../types';

export const loadRaceSchedule =
  (isInitialLoading?: boolean): AppThunkAction =>
  async (dispatch, getState, { api }) => {
    try {
      const state = getState();

      if (isInitialLoading && state.raceScheduleState.raceSchedule.length) {
        // there's cashed data
        return;
      }

      dispatch(getRaceScheduleLoadingAction());

      const response = await api.raceSchedule.getRaceSchedule();

      const data = response.data.MRData;

      const payload = {
        raceSchedule: data.RaceTable.Races,
      };

      dispatch(getRaceScheduleSuccessAction(payload));
    } catch (e) {
      console.error(e);
      dispatch(getRaceScheduleLoadingAction());
    }
  };
