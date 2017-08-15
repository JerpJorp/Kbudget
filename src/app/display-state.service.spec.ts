import { TestBed, inject } from '@angular/core/testing';

import { DisplayStateService } from './display-state.service';

describe('DisplayStateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplayStateService]
    });
  });

  it('should be created', inject([DisplayStateService], (service: DisplayStateService) => {
    expect(service).toBeTruthy();
  }));
});
