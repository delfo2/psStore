import { TestBed } from '@angular/core/testing';

import { GameDatabaseApiService } from './game-database-api.service';

describe('GameDatabaseApiService', () => {
  let service: GameDatabaseApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameDatabaseApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
