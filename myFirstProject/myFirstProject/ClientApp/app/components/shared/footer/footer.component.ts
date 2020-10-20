import { Component } from '@angular/core';

@Component({
    selector: 'footer-component',
    templateUrl: './footer.component.html'
})

export class FooterComponent {
    title = "footer";
    author = "Anton Usanov";
    year = 2018;
    link = "https://github.com/ant9n19";
    content = 'All rights reserved';
}