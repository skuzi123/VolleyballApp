import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PlayerService} from "../../services/player-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit{
  @Input() placeholder: string = 'Wpisz coś...';
  @Input() searchTerm: string = '';
  @Output() searchTermChange = new EventEmitter<string>();

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit(): void {
  }

  onSearch() {

      // Używaj metody findBySurname z PlayerService do wyszukiwania po nazwisku
      this.playerService.findBySurname(this.searchTerm).subscribe(
        (player) => {
          // Jeśli gracz istnieje, przekieruj do jego profilu
          this.router.navigate(['/player', player.surname]);
        },
        (error) => {
          // Jeśli gracz nie zostanie znaleziony lub wystąpi inny błąd, obsłuż to tutaj
          // Na przykład możesz wyświetlić komunikat błędu
        }
      );
    // this.playerService.getPlayers().subscribe(players => {
    //   const playerExists = players.some(player => player.surname.toLowerCase() === this.searchTerm.toLowerCase());
    //   if (playerExists) {
    //     this.router.navigate(['/', this.searchTerm]);
    //   } else {
    //
    //   }
    // });
  }
}
