import { TestBed } from '@angular/core/testing';

import { HitMoviesApiService } from './hit-movies-api.service';

describe('HitMoviesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HitMoviesApiService = TestBed.get(HitMoviesApiService);
    expect(service).toBeTruthy();
  });
});
