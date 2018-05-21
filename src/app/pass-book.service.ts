import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PassBookService {
  private subject = new Subject<any>();

  constructor() {
  }

  sendBook(book: any) {
    this.subject.next(book);
  }

  getBook(): Observable<any> {
    return this.subject.asObservable();
  }
}
