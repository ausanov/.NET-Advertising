import { Component, Input } from '@angular/core';

@Component({
    selector: 'categories-component',
    templateUrl: './categories.component.html'
})

export class CategoriesComponent {
    @Input() title: string = "";
    items: Array<string>;

    constructor() {
        this.items = ['Category #1', 'Category #2', 'Category #3'];
    }
}