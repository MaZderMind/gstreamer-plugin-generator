import {TestBed} from '@angular/core/testing';

import {NavigationService} from './navigation-service.service';

describe('NavigationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavigationService = TestBed.get(NavigationService);
    expect(service).toBeTruthy();
  });
});
