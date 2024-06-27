import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { QuotesService } from '../services/quotes.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

    public quotes: { quote: string; author: string }[] = [];
    public currentQuoteIndex = 0;
    public currentQuote: { quote: string; author: string } | null = null;

    constructor(private quotesService: QuotesService) {
        this.quotesService.getQuotes().subscribe((data) => {
            this.quotes = data.quotes;
            this.showNextQuote();
            setInterval(() => {
              this.showNextQuote();
            }, 5000);
          });
    }

    showNextQuote() {
        if (this.quotes.length > 0) {
            this.currentQuote = this.quotes[this.currentQuoteIndex];
            this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.quotes.length;
        }
    }

}
