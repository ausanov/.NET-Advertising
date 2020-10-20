import { Component } from "@angular/core";
import { NgForm, NgModel } from '@angular/forms';
import { Card } from "../../shared/card.type";
import { CardService } from "../../shared/card.service";
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'card-add-component',
    templateUrl: './card-add.component.html'
})

export class CardAddComponent {
    //date: Date = new Date();
    //public types = ['Category #1', 'Category #2', 'Category #3'];
    //public title: string = "";
    //public phone: string = "";
    //public city: string = "";
    //public type: string = "";
    //public price: number = 0;
    //public name: string = "";
    //public tags: string = "";
    //public site: string = "";
    //public text: string = "";
    //public longText: string = "";
    //public email: string = "";

    card: Card;

    constructor(private cardService: CardService, private router: Router) {
        this.card = new Card();
    }

    add() {
        this.cardService.addCard(this.card).then((card: any) => {
            this.card = card;
            this.router.navigate(['card', card.id]);
        });
    }
}