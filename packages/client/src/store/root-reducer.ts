/* eslint-disable no-else-return */
import { Action, Reducer, Dispatch } from 'redux';
import { Characteristic } from 'Base/types/Characteristic';

export enum InfoDrawerChildren {
  HEALTH,
  WEAPONS,
  SKILL,
  TALENT,
}
export type SkillInfo = {
  id: number;
  name: string;
  characteristic: Characteristic;
  rank: number;
}
export interface InitialState {
  infoDrawerOpen: boolean;
  infoDrawerChild?: InfoDrawerChildren;
  skillInfo?: SkillInfo;
}

export const initialState: InitialState = {
  infoDrawerOpen: false,
  infoDrawerChild: undefined,
  skillInfo: undefined,
};

export interface DispatchAction extends Action<ActionType> {
  payload: Partial<InitialState>
}

export enum ActionType {
  TOGGLE_INFO_DRAWER = 'TOGGLE_INFO_DRAWER',
  SET_SKILL_INFO = 'SET_SKILL_INFO',
}

export const rootReducer: Reducer<InitialState, DispatchAction> = (state = initialState, action) => { // eslint-disable-line
  if (action.type === ActionType.TOGGLE_INFO_DRAWER) {
    return { ...state, infoDrawerOpen: !state.infoDrawerOpen, infoDrawerChild: action.payload.infoDrawerChild };
  } else if (action.type === ActionType.SET_SKILL_INFO) {
    return { ...state, skillInfo: action.payload.skillInfo };
  }
  return state;
}

export class RootDispatcher {
  private readonly dispatch: Dispatch<DispatchAction>;

  constructor(dispatch: Dispatch<DispatchAction>) {
    this.dispatch = dispatch;
  }

  toggleInfoDrawer = (infoDrawerChild?: InfoDrawerChildren) => this.dispatch({ type: ActionType.TOGGLE_INFO_DRAWER, payload: {infoDrawerChild} });

  setSkillInfo = (skillInfo: SkillInfo) => this.dispatch({ type: ActionType.SET_SKILL_INFO, payload: { skillInfo } });
}