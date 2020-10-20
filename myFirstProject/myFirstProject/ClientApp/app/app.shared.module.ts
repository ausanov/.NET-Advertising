import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { DescriptionComponent } from './components/shared/description/description.component';
import { CategoriesComponent } from './components/shared/categories/categories.component';
import { SearchComponent } from './components/shared/search/search.component';
import { CardDetailsComponent } from './components/card/card-details/card-details.component';
import { CardSummaryComponent } from './components/card/card-summary/card-summary.component';
import { CardAddComponent } from './components/card/card-add/card-add.component';
import { CardService } from './components/shared/card.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        DescriptionComponent,
        CategoriesComponent,
        SearchComponent,
        CardDetailsComponent,
        CardSummaryComponent,
        CardAddComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: 'card/:id', component: CardDetailsComponent },
            { path: 'add', component: CardAddComponent },
            { path: 'home', component: HomeComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [CardService]
})
export class AppModuleShared { }
