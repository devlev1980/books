import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DateValueAccessorModule} from 'angular-date-value-accessor';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import {BooksComponent} from './components/books/books.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './api.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BookDetailsComponent} from './components/books/book-details/book-details.component';
import {BookEditComponent} from './components/book-edit/book-edit.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { AddbookComponent } from './components/addbook/addbook.component';
import {PassBookService} from './pass-book.service';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    PageNotFoundComponent,
    BookDetailsComponent,
    BookEditComponent,
    AddbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    DateValueAccessorModule

  ],
  entryComponents: [BookEditComponent,AddbookComponent],
  providers: [ApiService,PassBookService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
