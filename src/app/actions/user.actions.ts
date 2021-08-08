import {createAction} from '@ngrx/store';
import {User} from "../models";

export const getUsers = createAction('[User] Get User List');
export const getUserSuccess = createAction(
  '[Movie] Get User success',
  (users: ReadonlyArray<User>) => ({users})
);
