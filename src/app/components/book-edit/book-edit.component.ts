import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Book} from '../../models/book';
import {ApiService} from '../../api.service';


@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  book: Book;

  constructor(public dialogRef: MatDialogRef<any>, public matDialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data: any, private api: ApiService) {

  }

  ngOnInit() {

    // console.log(this.data);
    // console.log(this.book.title);
  }

  onCancel() {
    this.dialogRef.close();

  }

  onSaveEditedBook(form) {
    console.log(form, this.data.book.id);
    this.api.updateBook(form,this.data.book.id).subscribe(res=>{
      console.log('done');
    })
  }

}
