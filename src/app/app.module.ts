import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpErrorsInterceptor} from './interceptors/http-errors.interceptor';
import {HomeComponent} from './components/home/home.component';
import {UserDetailComponent} from './components/user-detail/user-detail.component';


import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from './effects/user.effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';

import {reducers} from './reducers/user.reducer';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UserEffects]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorsInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
