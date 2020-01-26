/* eslint-disable no-else-return */
import { Action, Reducer, Dispatch } from 'redux';
import { CharacteristicName } from 'generated/graphql';

export enum InfoDrawerChildren {
  HEALTH,
  WEAPONS,
  SKILL,
  TALENT,
}
export type SkillInfo = {
  id: number;
  name: string;
  characteristic: CharacteristicName;
  rank: number;
}
export interface InitialState {
  infoDrawerOpen: boolean;
  infoDrawerChild?: InfoDrawerChildren;
  skillInfo?: SkillInfo;
  menuOpen: boolean;
  darkMode: boolean;
}

export const initialState: InitialState = {
  infoDrawerOpen: false,
  menuOpen: false,
  infoDrawerChild: undefined,
  skillInfo: undefined,
  darkMode: true,
};

export interface DispatchAction extends Action<ActionType> {
  payload: Partial<InitialState>
}

export enum ActionType {
  TOGGLE_INFO_DRAWER = 'TOGGLE_INFO_DRAWER',
  TOGGLE_MENU = 'TOGGLE_MENU',
  SET_SKILL_INFO = 'SET_SKILL_INFO',
  TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE',
}

export const rootReducer: Reducer<InitialState, DispatchAction> = (state = initialState, action) => { // eslint-disable-line
  if (action.type === ActionType.TOGGLE_INFO_DRAWER) {
    return { ...state, infoDrawerOpen: !state.infoDrawerOpen, infoDrawerChild: action.payload.infoDrawerChild };
  } else if (action.type === ActionType.SET_SKILL_INFO) {
    return { ...state, skillInfo: action.payload.skillInfo };
  } else if (action.type === ActionType.TOGGLE_MENU) {
    return {...state, menuOpen: !state.menuOpen };
  } else if (action.type === ActionType.TOGGLE_DARK_MODE) {
    return { ...state, darkMode: !state.darkMode };
  }
  return state;
}

export class RootDispatcher {
  private readonly dispatch: Dispatch<DispatchAction>;

  constructor(dispatch: Dispatch<DispatchAction>) {
    this.dispatch = dispatch;
  }

  toggleInfoDrawer = (infoDrawerChild?: InfoDrawerChildren) => this.dispatch({ type: ActionType.TOGGLE_INFO_DRAWER, payload: {infoDrawerChild} });
  
  toggleMenu = () => this.dispatch({ type: ActionType.TOGGLE_MENU, payload: {} });
  
  toggleDarkMode = () => this.dispatch({ type: ActionType.TOGGLE_DARK_MODE, payload: {} });

  setSkillInfo = (skillInfo: SkillInfo) => this.dispatch({ type: ActionType.SET_SKILL_INFO, payload: { skillInfo } });
}