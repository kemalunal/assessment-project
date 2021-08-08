import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {environment as env} from 'src/environments/environment';
import {catchError} from "rxjs/operators";
import {User} from "../models";

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) {}

  getUserList(): Observable<ReadonlyArray<User>> {
    return this.http.get<ReadonlyArray<User>>(`${env.BASE_URL}/users`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
}
