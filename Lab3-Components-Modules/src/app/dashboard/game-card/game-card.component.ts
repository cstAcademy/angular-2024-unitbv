import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/app/core/game.interface';
import { GameService } from 'src/app/core/game.service';

@Component({
  selector: 'app-game-card[game]',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent implements OnInit {
  @Input() game!: Game;

  review: string = '';

  constructor(private router: Router, private gameService: GameService) {}

  ngOnInit(): void {}

  navigateToGamePage() {
    this.gameService.saveGameToService(this.game);
    this.router.navigateByUrl('/game-page');
  }

  clearReview() {
    this.review = '';
  }

  voteGame() {
    this.gameService.voteBestGame(this.game);
  }
}
