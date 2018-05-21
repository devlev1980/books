import { TestBed, inject } from '@angular/core/testing';

import { PassBookService } from './pass-book.service';

describe('PassBookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PassBookService]
    });
  });

  it('should be created', inject([PassBookService], (service: PassBookService) => {
    expect(service).toBeTruthy();
  }));
});
