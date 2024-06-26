import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-invest',
    standalone: true,
    imports: [RouterOutlet, CommonModule, FormsModule],
    templateUrl: './invest.component.html',
    styleUrl: './invest.component.css'
})
export class InvestComponent {
    title = 'green-invest';
    public cost = 45.8
    public numshares = 0
    public total = 0; 

    calctotal() : number {
        this.total = (this.numshares * this.cost);
        return parseFloat(this.total.toFixed(5));
    }
    
}
