import {Component, OnInit} from '@angular/core';
import {Team} from "../../core/model/team";
import {TeamService} from "../../core/services/team-service";
import {Player} from "../../core/model/player";
import {PlayerService} from "../../core/services/player-service";
import {Subscription} from "rxjs";
import {SearchService} from "../../core/services/search-service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile-player',
  templateUrl: './profile-player.component.html',
  styleUrls: ['./profile-player.component.scss']
})
export class ProfilePlayerComponent implements OnInit{
  player?: Player;

  constructor(private route: ActivatedRoute, private playerService: PlayerService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const surname = params['surname'];
      this.playerService.findBySurname(surname).subscribe(player => {
        this.player = player;
      }, error => {
        // Handle error, e.g., player not found
      });
    });
  }

}
