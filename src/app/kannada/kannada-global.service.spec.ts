import { TestBed } from '@angular/core/testing';

import { KannadaGlobalService } from './kannada-global.service';

describe('KannadaGlobalService', () => {
  let service: KannadaGlobalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KannadaGlobalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
