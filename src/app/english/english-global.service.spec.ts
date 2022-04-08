import { TestBed } from '@angular/core/testing';

import { EnglishGlobalService } from './english-global.service';

describe('EnglishGlobalService', () => {
  let service: EnglishGlobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnglishGlobalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
