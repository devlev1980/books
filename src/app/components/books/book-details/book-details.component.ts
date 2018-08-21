import {AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Book} from '../../../models/book';
import {BooksComponent} from '../books.component';
import {PassBookService} from '../../../pass-book.service';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit ,OnDestroy{


  book ={};
  subscription: Subscription;


  constructor(private bookService: PassBookService,private activated_routes: ActivatedRoute) {
    this.subscription = this.bookService.getBook().subscribe(data => {
      console.log(data) ;
    });
  }

  ngOnInit() {
    this.activated_routes.paramMap.subscribe((params: ParamMap) => {
      console.log(params)
      // const id = parseInt(params.get('id'), 10);
      // this.departmentId = id;
    });

  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
