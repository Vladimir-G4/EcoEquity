import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LeaderboardService } from '../services/leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, HttpClientModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent {

  public leaderboardData: any[] | null = null;

  constructor(private leaderboardService: LeaderboardService) {
    this.leaderboardService.getLeaderboard().then((leaderboard) => {
      this.leaderboardData = leaderboard;
    })
  }

}
