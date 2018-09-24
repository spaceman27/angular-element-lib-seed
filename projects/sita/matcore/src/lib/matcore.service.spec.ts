import { TestBed, inject } from '@angular/core/testing';

import { MatcoreService } from './matcore.service';

describe('MatcoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatcoreService]
    });
  });

  it('should be created', inject([MatcoreService], (service: MatcoreService) => {
    expect(service).toBeTruthy();
  }));
});
