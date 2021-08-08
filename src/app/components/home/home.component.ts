import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from 'src/app/models';
import {select, Store} from "@ngrx/store";
import {getUsers} from "../../actions/user.actions";
import {userSelector} from "../../selectors/user.selectors";
import {AppState} from "../../reducers/user.reducer";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userList$: Observable<ReadonlyArray<User>>

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {
    this.userList$ = store.pipe(select(userSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(getUsers());
  }

  openUserDetail(id: number): void {
    this.router.navigate(['user-detail', id]);
  }
}
