import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BooksComponent} from './components/books/books.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {BookEditComponent} from './components/book-edit/book-edit.component';
import {BookDetailsComponent} from './components/book-details/book-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/books', pathMatch: 'full'},
  {path: 'books', component: BooksComponent},
  {path: 'edit/:id', component: BookEditComponent},
  {path: 'details/:id', component: BookDetailsComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
