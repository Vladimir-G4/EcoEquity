import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { BuyModalComponent } from './buy-modal/buy-modal.component';
import { PortfolioModalComponent } from './portfolio-modal/portfolio-modal.component';

interface Stock {
  name: string;
  ticker: string;
  price: number;
  desc: string;
  performance: string;
  esg: string;
  pe: number;
  risk: string;
  industry: string;
}

@Component({
  selector: 'app-invest',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, HttpClientModule, BuyModalComponent, PortfolioModalComponent],
  templateUrl: './invest.component.html',
  styleUrl: './invest.component.css'
})
export class InvestComponent {
  public stocks: Stock[] = [
    {
      name: 'Green Energy Solutions Inc.',
      ticker: 'GESI',
      price: 42.50,
      desc: 'Green Energy Solutions Inc. focuses on providing sustainable energy solutions globally, aiming to reduce carbon emissions.',
      performance: '+1.20 (+2.90%)',
      esg: 'Renewable Energy',
      pe: 15,
      risk: 'Medium',
      industry: 'Renewable Energy'
    },
    {
      name: 'Tech Innovations Ltd.',
      ticker: 'TINN',
      price: 95.25,
      desc: 'Tech Innovations Ltd. specializes in cutting-edge technology solutions for industries worldwide.',
      performance: '-0.75 (-0.78%)',
      esg: 'Technology',
      pe: 25,
      risk: 'High',
      industry: 'Technology'
    },
    {
      name: 'Healthcare United Corp.',
      ticker: 'HUC',
      price: 78.60,
      desc: 'Healthcare United Corp. provides healthcare services and products with a focus on patient care and innovation.',
      performance: '+2.10 (+2.75%)',
      esg: 'Healthcare',
      pe: 18,
      risk: 'Medium',
      industry: 'Healthcare'
    },
    {
      name: 'Global Foods Enterprises',
      ticker: 'GFEO',
      price: 55.80,
      desc: 'Global Foods Enterprises produces and distributes food products using sustainable farming practices.',
      performance: '+0.90 (+1.63%)',
      esg: 'Food & Beverage',
      pe: 20,
      risk: 'Low',
      industry: 'Food & Beverage'
    },
    {
      name: 'Clean Transport Solutions',
      ticker: 'CTS',
      price: 125.40,
      desc: 'Clean Transport Solutions develops electric and hybrid vehicles for eco-friendly transportation.',
      performance: '+3.50 (+2.87%)',
      esg: 'Automotive',
      pe: 30,
      risk: 'Medium',
      industry: 'Automotive'
    }
  ];

  public currentStockIndex: number = 0;

  constructor() { }

  skipStock() {
    this.currentStockIndex = (this.currentStockIndex + 1) % this.stocks.length;
  }
}
