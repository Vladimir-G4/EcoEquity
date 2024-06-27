import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, HttpClientModule],
  templateUrl: './learn.component.html',
  styleUrl: './learn.component.css'
})
export class LearnComponent {
  public activeTab: string = 'Tab1';
  
  openTab(tab: string) {
    this.activeTab = tab;
  }

  constructor() {
  }

}
