import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  @Output()
  newSearch: EventEmitter<any> = new EventEmitter<any>();

  fixednavbar: boolean = false;
  user?: string;
  constructor(
    public router: Router

  ) {}
  @HostListener('window:scroll', ['$event']) onScroll() {
    this.fixednavbar = window.scrollY > 100;
  }
  ngOnInit(): void {
    // this.authService.currentMessage$.subscribe((sub) => {
    //   this.user = sub;
  }

  logOut() {
    localStorage.removeItem('token');
    this.user = undefined;
    // this.authService.sendMessage('');
    this.router.navigate(['login']);
  }
}
