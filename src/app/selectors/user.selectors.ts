import {getSelectors, RouterReducerState} from '@ngrx/router-store';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {User} from '../models';
import {AppState} from '../reducers/user.reducer';


export const userSelector = createSelector(
  (state: AppState) => state.users,
  (users: ReadonlyArray<User>) => users
);

const selectRouter = createFeatureSelector<RouterReducerState>('router');

export const {
  selectRouteParams, // select the current route params
} = getSelectors(selectRouter);


export const selectUser = createSelector(
  userSelector,
  selectRouteParams,
  (users: ReadonlyArray<User>, {id}) => {
    return users.find(u => u.id == id)
  });
