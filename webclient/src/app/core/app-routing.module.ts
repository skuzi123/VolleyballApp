import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {LoginGuard} from "./guards/login.guard";
import {AuthGuard} from "./guards/auth.guard";
import {TableLeagueComponent} from "../feature/main-page/table-league/table-league.component";
import {MainPageComponent} from "../feature/main-page/main-page.component";
import {ProfilePlayerComponent} from "../feature/profile-player/profile-player.component";
import {ProfileTrainerComponent} from "../feature/profile-trainer/profile-trainer.component";
import {ProfileTeamComponent} from "../feature/profile-team/profile-team.component";
import {UserProfileComponent} from "../feature/user-profile/user-profile.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'table', component: TableLeagueComponent, canActivate: [AuthGuard]},
  {path: 'main', component: MainPageComponent, canActivate: [AuthGuard]},
  {path: '', component: MainPageComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'player/:surname', component: ProfilePlayerComponent, canActivate: [AuthGuard]},
  {path: 'trainer/:surname', component: ProfileTrainerComponent, canActivate: [AuthGuard]},
  {path: 'team/:teamName', component: ProfileTeamComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'main',},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
