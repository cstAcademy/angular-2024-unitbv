import { Component, OnInit } from '@angular/core';
import { Game } from '../core/game.interface';
import { GameService } from '../core/game.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent implements OnInit {
  gameSavedInService!: Game;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameSavedInService = this.gameService.savedGame;
  }
}
