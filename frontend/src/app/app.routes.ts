import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { LearnComponent } from './learn/learn.component';
import { InvestComponent } from './invest/invest.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'invest', component: InvestComponent},
    {path: 'learn', component: LearnComponent},
    {path: 'leaderboard', component: LeaderboardComponent},
];
