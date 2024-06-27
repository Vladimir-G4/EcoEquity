import { createClient } from '@supabase/supabase-js'
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LeaderboardService {
    private supabaseUrl = 'https://kielbecljdqfmbeduzbq.supabase.co'
    private supabaseKey = environment.supabaseApiKey;
    private supabase = createClient(this.supabaseUrl, this.supabaseKey!)

    constructor() { }

    async getLeaderboard() {
        let { data: leaderboard, error } = await this.supabase
            .from('leaderboard')
            .select('*')
        return leaderboard
    }

    async updateLeaderboard(rank: number, name: string, score: number) {
        let { data, error } = await this.supabase
            .from('leaderboard')
            .update({ rank: rank, name: name, score: score })
            .eq('rank', rank)
            .select()
        return data
    }

    determineRank(score: number) {
        return this.getLeaderboard().then((leaderboard) => {
            let rank = 1
            for (let entry of leaderboard!) {
                if (entry.score > score) {
                    rank += 1
                }
            }
            return rank
        })
    }


}