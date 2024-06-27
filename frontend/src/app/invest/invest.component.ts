import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-invest',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, HttpClientModule],
  templateUrl: './invest.component.html',
  styleUrl: './invest.component.css'
})
export class InvestComponent {

    constructor() {

    }

}
