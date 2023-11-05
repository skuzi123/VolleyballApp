import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {LoginGuard} from "./guards/login.guard";
import {AuthGuard} from "./guards/auth.guard";
import {TableLeagueComponent} from "../feature/main-page/table-league/table-league.component";
import {MainPageComponent} from "../feature/main-page/main-page.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'table', component: TableLeagueComponent, canActivate: [AuthGuard]},
  {path: 'main', component: MainPageComponent,  canActivate: [AuthGuard]},
  {path: '', component: MainPageComponent,  canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: '**', redirectTo: 'table',},
  // {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
