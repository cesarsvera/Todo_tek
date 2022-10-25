import { TestBed } from '@angular/core/testing';

import { DbLaravelService } from './services/db-laravel.service';

describe('DbLaravelService', () => {
  let service: DbLaravelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbLaravelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
