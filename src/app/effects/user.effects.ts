import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {exhaustMap, map} from 'rxjs/operators';
import {HttpService} from '../services/http.service';
import {getUsers, getUserSuccess} from "../actions/user.actions";

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.action$.pipe(
      ofType(getUsers),
      exhaustMap(() => {
          return this.httpService.getUserList().pipe(
            map((users) => getUserSuccess(users))
          );
        }
      )
    )
  );

  constructor(private action$: Actions, private httpService: HttpService) {
  }
}
