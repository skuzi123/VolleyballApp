import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './core/app-routing.module';
import {AppComponent} from './core/app.component';
import {LoginComponent} from './core/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from './core/header/header.component';
import {FooterComponent} from './core/footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegisterComponent} from './core/register/register.component';
import {MainPageComponent} from './feature/main-page/main-page.component';
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TableLeagueComponent} from './feature/main-page/table-league/table-league.component';
import {ProfilePlayerComponent} from './feature/profile-player/profile-player.component';
import {ProfileTrainerComponent} from './feature/profile-trainer/profile-trainer.component';
import {ReportContainerComponent} from './feature/main-page/report-container/report-container.component';
import {AuthInterceptor} from "./core/_helpers/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    MainPageComponent,
    TableLeagueComponent,
    ProfilePlayerComponent,
    ProfileTrainerComponent,
    ReportContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [JwtHelperService,
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
