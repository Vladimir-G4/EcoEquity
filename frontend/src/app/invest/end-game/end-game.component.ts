import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-end-game',
    standalone: true,
    imports: [RouterOutlet, CommonModule, RouterModule],
    templateUrl: './end-game.component.html',
    styleUrl: './end-game.component.css'
})
export class EndgameComponent {

    constructor() {
    }

}