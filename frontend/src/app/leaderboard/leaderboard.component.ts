import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LeaderboardService } from '../services/leaderboard.service';

interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
}

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, HttpClientModule],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent {

  public leaderboardData: LeaderboardEntry[] = [];

  constructor(private http: HttpClient, private leaderboardService: LeaderboardService) {
    this.fetchLeaderboardData();
  }

  fetchLeaderboardData() {
    const url = 'assets/leaderboard.json';
    this.http.get<LeaderboardEntry[]>(url).subscribe(
      (data: LeaderboardEntry[]) => {
        this.leaderboardData = data;
      },
      (error: any) => {
        console.error('Error fetching leaderboard data:', error);
      }
    );
  }

}
