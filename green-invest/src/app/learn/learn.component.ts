import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './learn.component.html',
  styleUrl: './learn.component.css'
})
export class LearnComponent {
  title = 'green-invest';
  activeTab: string = 'Tab1';

  openTab(tabName: string): void {
    this.activeTab = tabName;
    console.log(this.activeTab);
  }
}

