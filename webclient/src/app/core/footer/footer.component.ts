import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentTimestamp!: Date;
  time!: string;

  constructor() {
  }

  ngOnInit(): void {
    this.time = 'Volleyball League'
  }
}
