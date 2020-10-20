import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/card.type';
import { CardService } from '../shared/card.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    cards: Card[];

    constructor(private cardService: CardService) {
        //this.cards = [
        //    {
        //        id: 1,
        //        title: "Title from the code",
        //        date: new Date(),
        //        email: "a.usanov998@gmail.com",
        //        longText: "Details of advertising",
        //        name: "Anton Usanov",
        //        phone: "+38 (050) 249-48-40",
        //        price: 0,
        //        site: "https://github.com/ant9n19",
        //        tags: ['advertising', 'text'],
        //        text: "Description of advertising",
        //        type: { id: 1, name: "Category #1" },
        //        city: { id: 1, name: "Dnipro" }
        //    }
        //];
    }

    ngOnInit() {
        this.cardService.getAllCards().then(cards => this.cards = cards);
    }
}
