import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BuyModalComponent } from './buy-modal/buy-modal.component';
import { PortfolioModalComponent } from './portfolio-modal/portfolio-modal.component';
import { StockService } from '../services/stockService.service';

interface Stock {
  name: string,
  ticker: string,
  price: number,
  desc: string,
  performance: string,
  esg: string,
  pe: number,
  risk: string,
  industry: string
}

interface UserStock {
  ticker: string,
  quantity: number,
  price: number,
  industry: string
}

type StockDictionary = { [key: string]: [string, number] }

@Component({
  selector: 'app-invest',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, HttpClientModule, BuyModalComponent, PortfolioModalComponent],
  templateUrl: './invest.component.html',
  styleUrl: './invest.component.css'
})
export class InvestComponent {

  public stockService = new StockService();
  public stocks: Stock[] = [];

  constructor() {
    this.stocks = this.stockService.getAllStocks();
  }

}
