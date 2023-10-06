import { Race } from '../../types';

export enum ActionType {
  GET_RACE_SCHEDULE_LOADING = 'RACE_SCHEDULE/GET_RACE_SCHEDULE_LOADING',
  GET_RACE_SCHEDULE_REFRESHING_SUCCESS = 'RACE_SCHEDULE/GET_RACE_SCHEDULE_REFRESHING_SUCCESS',
  GET_RACE_SCHEDULE_SUCCESS = 'RACE_SCHEDULE/GET_RACE_SCHEDULE_SUCCESS',
}

type GetRaceScheduleLoadingAction = { type: ActionType.GET_RACE_SCHEDULE_LOADING };

type GetRaceScheduleRefreshingAction = { type: ActionType.GET_RACE_SCHEDULE_REFRESHING_SUCCESS };

type GetRaceScheduleSuccessAction = {
  type: ActionType.GET_RACE_SCHEDULE_SUCCESS;
  payload: {
    raceSchedule: Race[];
  };
};

export const getRaceScheduleLoadingAction = (): GetRaceScheduleLoadingAction => ({
  type: ActionType.GET_RACE_SCHEDULE_LOADING,
});

export const getRaceScheduleSuccessAction = (
  payload: GetRaceScheduleSuccessAction['payload'],
): GetRaceScheduleSuccessAction => ({
  type: ActionType.GET_RACE_SCHEDULE_SUCCESS,
  payload,
});

export type RaceScheduleActions =
  | GetRaceScheduleLoadingAction
  | GetRaceScheduleSuccessAction
  | GetRaceScheduleRefreshingAction;
