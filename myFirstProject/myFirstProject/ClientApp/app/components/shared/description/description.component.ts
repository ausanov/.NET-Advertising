import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'description-component',
    templateUrl: './description.component.html'
})

export class DescriptionComponent {
    title = "Description";
    content = "Description of application.";

    constructor(private router: Router) { }

    goToAdd() {
        this.router.navigate(['add']);
    }
}