import { TestBed } from '@angular/core/testing';

import { CentreService } from './centre.service';

describe('CentreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CentreService = TestBed.get(CentreService);
    expect(service).toBeTruthy();
  });
});
