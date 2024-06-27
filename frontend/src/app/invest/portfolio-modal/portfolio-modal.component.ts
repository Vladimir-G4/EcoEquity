import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-portfolio-modal',
    standalone: true,
    imports: [RouterOutlet, CommonModule, RouterModule, HttpClientModule],
    templateUrl: './portfolio-modal.component.html',
    styleUrl: './portfolio-modal.component.css'
})
export class PortfolioModalComponent {

    constructor() {

    }

}
