import {TestBed} from '@angular/core/testing';

import {StoreService} from './store-service.service';

describe('StoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreService = TestBed.get(StoreService);
    expect(service).toBeTruthy();
  });
});
