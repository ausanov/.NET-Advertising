import { Injectable, NgModule } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { ServerModule } from '@angular/platform-server';
import { Card } from '../../components/shared/card.type';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CardService {
    constructor(private http: Http) { }

    getAllCards() {
        return this.http.get("api/card/getall").map((response: any) => response.json() as Card[]).toPromise();
    }

    getCard(id: number) {
        return this.http.get("api/card/get/${id}").map((response: any) => response.json() as Card)
            .toPromise();
    }

    addCard(card: Card) {
        return this.http.post("api/card/add", card).toPromise();
    }
}