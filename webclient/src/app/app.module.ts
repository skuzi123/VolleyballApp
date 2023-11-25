import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './core/app-routing.module';
import {AppComponent} from './core/app.component';
import {LoginComponent} from './core/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import {LeftPanelComponent} from './core/left-panel/left-panel.component';
import {SearchBarComponent} from './core/left-panel/search-bar/search-bar.component';
import {SearchBarTrainerComponent} from './core/left-panel/search-bar-trainer/search-bar-trainer.component';
import {SearchBarTeamComponent} from './core/left-panel/search-bar-team/search-bar-team.component';
import {ProfileTeamComponent} from './feature/profile-team/profile-team.component';
import { UserProfileComponent } from './feature/user-profile/user-profile.component';
import { MatchCarouselComponent } from './core/match-carousel/match-carousel.component';
import {MatButtonModule} from "@angular/material/button";
import { EditProfileDialogComponent } from './feature/edit-profile-dialog/edit-profile-dialog.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";

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
    ReportContainerComponent,
    LeftPanelComponent,
    SearchBarComponent,
    SearchBarTrainerComponent,
    SearchBarTeamComponent,
    ProfileTeamComponent,
    UserProfileComponent,
    MatchCarouselComponent,
    EditProfileDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
  ],
  providers: [JwtHelperService,
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
