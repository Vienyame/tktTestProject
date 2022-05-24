import { TestBed } from '@angular/core/testing';

import { EnterprisesService } from './movies.service';

describe('MoviesService', () => {
  let service: EnterprisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnterprisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
