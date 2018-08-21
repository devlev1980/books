import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Book} from './models/book';
import 'rxjs/add/operator/map';


@Injectable()
export class ApiService {
  books = {} as Book[];

  constructor(private _http: HttpClient) {

  }

  getBooks(): Observable<Book[]> {
    // return this._http.get('https://jsonplaceholder.typicode.com/photos');
    return this._http.get('assets/books.json').map((data: any) => {

      this.books = data;
      return this.books;
    });
  }

  addBook(book) {

    return this._http.post('http://localhost:3000/books', book);


  }

  updateBook(form, id) {
    console.log(form, id);
    const url = 'http://localhost:3000/books/' + id;
    const updatedBook = {
      id: id,
      title: form.title,
      author: form.author,
      date: form.date,
      url: form.url
    };
    return this._http.put(url, updatedBook, id);
  }

  deleteBook(id): any {
    const url = 'http://localhost:3000/books/' + id;
    // this.books.splice(id,1);
    return this._http.delete(url, id);
    // return this.books;

  }

}
