import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../api.service';
import {Book} from '../../models/book';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {BookEditComponent} from '../book-edit/book-edit.component';
import {AddbookComponent} from '../addbook/addbook.component';
import {PassBookService} from '../../pass-book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books = [];


  constructor(private _api: ApiService, private _route: Router, private dialog: MatDialog,private bookService: PassBookService) {
  }

  ngOnInit(): void {
    this._api.getBooks().subscribe((res: any) => {
      console.log(res);
      this.books = res;
    });
  }

  onAddBook() {
    const dialogRef: MatDialogRef<any> = this.dialog.open(AddbookComponent, {
      width: '600px',
    });


    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log('The dialog was closed');
    });
  }

  onEditBook(book) {

    const dialogRef: MatDialogRef<any> = this.dialog.open(BookEditComponent, {
      width: '300px',
      data: {book: book},
      disableClose: true
    });


    dialogRef.afterClosed().subscribe(result => {

      console.log('The dialog was closed');

    });

    // this._route.navigate(['/edit', book.id]);
  }

  onDeleteBook(id) {
    console.log(id);
    // let delBook = this.books[id].id;
    this._api.deleteBook(id).subscribe(res => {
      console.log('Book was deleted');
      this.ngOnInit();

    });
  }

  goToDetails(book) {
    this.bookService.sendBook(book);
    this._route.navigate([`/details/${book.id}`]);

  }





}
