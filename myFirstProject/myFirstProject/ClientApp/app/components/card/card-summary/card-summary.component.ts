import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../../shared/card.type';

@Component({
    selector: 'card-summary-component',
    templateUrl: './card-summary.component.html'
})

export class CardSummaryComponent {
    //title = "Title";
    //date = new Date().toLocaleString();
    //text = "Text of ads";
    @Input()
    card: Card = new Card;

    constructor(private router: Router) { }

    goToDetails() {
        this.router.navigate(['card', this.card.id]);
    }
}