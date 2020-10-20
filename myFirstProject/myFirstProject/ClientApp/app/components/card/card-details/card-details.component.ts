import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Card } from '../../shared/card.type';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../shared/card.service';

@Component({
    selector: 'card-details-component',
    templateUrl: 'card-details.component.html'
})

export class CardDetailsComponent implements OnInit {
    //title = "Title";
    //phone = "+38 (050) 249-48-40";
    //city = "Dnipro";
    //type = "Category #1";
    //price = 150;
    //name = "Anton";
    //tags = ["ads", "example", "card"];
    //site = "https://github.com/ant9n19";
    //date = new Date().toLocaleString();
    //text = "This is text of advertising";
    //longText = "This is description of advertising";
    card: Card;

    constructor(private route: ActivatedRoute, private cardService: CardService) {
        this.card = new Card();
    }

    ngOnInit() {
        //this.route.params.subscribe(params => {
        //    this.card.id = params['id'];
        //    this.card.title = "Title from the code #1";
        //    this.card.date = new Date();
        //    this.card.email = "a.usanov998@gmail.com";
        //    this.card.longText = "Details from details";
        //    this.card.name = "Anton";
        //    this.card.phone = "+38 (050) 249-48-40";
        //    this.card.price = 0;
        //    this.card.site = "https://github.com/ant9n19";
        //    this.card.text = "Description from the code #1";
        //    this.card.type = { id: 1, name: "Category #1" };
        //    this.card.city = { id: 1, name: "Dnipro" };
        //    this.card.tags = ["Advertising", "Test", "Tag"];
        //    console.log(this.card);
        //});
        this.route.params.subscribe(params => {
            let id = +params['id'];
            this.cardService.getCard(id).then(card => {
                this.card = card;
                console.log(this.card);
            });
        });
    }
}