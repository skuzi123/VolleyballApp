import {Component, OnInit} from '@angular/core';
import {Team} from "../../core/model/team";
import {TeamService} from "../../core/services/team-service";
import {Player} from "../../core/model/player";
import {PlayerService} from "../../core/services/player-service";
import {Subscription} from "rxjs";
import {SearchService} from "../../core/services/search-service";

@Component({
  selector: 'app-profile-player',
  templateUrl: './profile-player.component.html',
  styleUrls: ['./profile-player.component.scss']
})
export class ProfilePlayerComponent implements OnInit{
  player: Player | undefined;

  private searchSubscription: Subscription | undefined;

  constructor(private playerService: PlayerService, private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchSubscription = this.searchService.getSearchValue().subscribe((surname) => {
      this.playerService.findBySurname(surname).subscribe(playerData => {
        this.player = playerData;
        },
        error => {
          console.error('There was an error!', error);
        }
      );
    });

  }
  ngOnDestroy(): void {

    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }

}}
