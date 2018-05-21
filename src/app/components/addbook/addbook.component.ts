import {Component, OnInit} from '@angular/core';
import {Book} from '../../models/book';
import {ApiService} from '../../api.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss']
})
export class AddbookComponent implements OnInit {
  books:Book[] = [];
  book={};


  constructor(private _api: ApiService) {

  }

  ngOnInit() {
    this._api.getBooks().subscribe()
  }

  onAdd(newBook) {
    console.log(newBook);
    this.book = newBook;
    this._api.addBook(this.book).subscribe((data:any)=>{
        console.log('Book successfully added')
    });


  }

}
