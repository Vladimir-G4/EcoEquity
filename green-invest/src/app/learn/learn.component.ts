import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-learn',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './learn.component.html',
    styleUrl: './learn.component.css'
})
export class LearnComponent {
    title = 'green-invest';
}