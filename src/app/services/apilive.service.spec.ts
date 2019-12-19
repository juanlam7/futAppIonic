import { TestBed } from '@angular/core/testing';

import { ApiliveService } from './apilive.service';

describe('ApiliveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiliveService = TestBed.get(ApiliveService);
    expect(service).toBeTruthy();
  });
});
