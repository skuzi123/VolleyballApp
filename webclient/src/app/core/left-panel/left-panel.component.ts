import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {MatchProfileComponent} from "../../feature/match-profile/match-profile.component";

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent {
  searchTerm = '';

  constructor(
    public router: Router,
    private dialog: MatDialog
  ) {
  }

  redirectToProfile() {
    this.router.navigate(['profile']);
  }

  addMatch() {
    const dialogRef = this.dialog.open(MatchProfileComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    });
  }

  isAdmin(): boolean {
    const authUser = localStorage.getItem('auth-user');
    if (authUser) {
      // console.log(JSON.parse(authUser).roles)
      return JSON.parse(authUser).roles.includes('ADMIN')
    } else {
      console.error("Can't read role")
      return false;
    }

  }
}


