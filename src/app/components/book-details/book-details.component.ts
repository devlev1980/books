import {AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Book} from '../../models/book';
import {BooksComponent} from '../books/books.component';
import {PassBookService} from '../../pass-book.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit ,OnDestroy{


  book ={};
  subscription: Subscription;


  constructor(private bookService: PassBookService) {
    this.subscription = this.bookService.getBook().subscribe(data => {
      console.log(data) ;
    });
  }

  ngOnInit() {


  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
