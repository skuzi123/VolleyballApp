import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent {
  searchTerm = '';
  constructor(
    public router: Router
  ) {
  }
  redirectToProfile() {
    this.router.navigate(['profile']);
  }
}
