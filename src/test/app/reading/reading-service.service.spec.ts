import { TestBed } from '@angular/core/testing';

import { ReadingService } from '../../../app/reading/reading.service';

describe('ReadingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReadingService = TestBed.get(ReadingService);
    expect(service).toBeTruthy();
  });
});
