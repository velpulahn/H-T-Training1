import { TestBed } from '@angular/core/testing';

import { AuthorPageServiceService } from './author-page-service.service';

describe('AuthorPageServiceService', () => {
  let service: AuthorPageServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorPageServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
