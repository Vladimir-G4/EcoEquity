import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-learn',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
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

