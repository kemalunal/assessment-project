import {ActionReducerMap, createReducer, on} from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import {getUserSuccess} from '../actions/user.actions';
import {User} from "../models";
import {RouterReducerState} from "@ngrx/router-store";

const initialState: ReadonlyArray<User> = [];

const _userReducer = createReducer(
  initialState,
  on(getUserSuccess, (state, {users}) => [...users]),
);

export function userReducer(state: any, action: any) {
  return _userReducer(state, action);
}

export interface AppState {
  users: ReadonlyArray<User>;
  router: RouterReducerState<any>;
}

export const reducers : ActionReducerMap<AppState> = {
  users: userReducer,
  router: routerReducer
};
