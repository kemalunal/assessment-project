import {Component} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {selectUser} from "../../selectors/user.selectors";
import {AppState} from "../../reducers/user.reducer";
import {getUsers} from "../../actions/user.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})

export class UserDetailComponent {
  user$ = this.store.pipe(select(selectUser));

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {

    //for direct visit
    this.user$.subscribe(user => {
      if (user == undefined) {
        this.store.dispatch(getUsers());
      }
    });
  }

  goUserlist(): void {
    this.router.navigate(['/']);
  }
}
