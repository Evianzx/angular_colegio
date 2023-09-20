import { TestBed } from '@angular/core/testing';

import { ApiColegioService } from './api-colegio.service';

describe('ApiColegioService', () => {
  let service: ApiColegioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiColegioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
