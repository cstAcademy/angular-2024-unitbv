import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/core/game.interface';
import { GameService } from 'src/app/core/game.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  arrayOfGames: Game[] = [];
  bestVotedGame: Game | null = null;

  searchValue: string = '';

  constructor(private gameService: GameService) {
    this.gameService.bestGameSubject$.subscribe((game) => {
      this.bestVotedGame = game;
    });
  }

  ngOnInit(): void {
    this.getListOfGames();
  }

  getListOfGames() {
    this.arrayOfGames = this.gameService.getListOfGames();
  }

  searchGame() {
    const listFiltered = this.gameService.searchByTitle(this.searchValue);
    console.log(listFiltered);
  }
}
