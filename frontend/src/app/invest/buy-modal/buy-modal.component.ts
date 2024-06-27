import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-buy-modal',
    standalone: true,
    imports: [RouterOutlet, CommonModule, RouterModule, HttpClientModule],
    templateUrl: './buy-modal.component.html',
    styleUrl: './buy-modal.component.css'
})
export class BuyModalComponent {

    constructor() {

    }

}
