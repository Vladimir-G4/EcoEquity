import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Quote {
  quote: string;
  author: string;
}

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private quotesUrl = 'assets/quotes.json';

  constructor(private http: HttpClient) {}

  getQuotes(): Observable<{ quotes: Quote[] }> {
    return this.http.get<{ quotes: Quote[] }>(this.quotesUrl);
  }
}