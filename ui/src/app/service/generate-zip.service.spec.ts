import { TestBed } from '@angular/core/testing';

import { GenerateZipService } from './generate-zip.service';

describe('GenerateZipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenerateZipService = TestBed.get(GenerateZipService);
    expect(service).toBeTruthy();
  });
});
