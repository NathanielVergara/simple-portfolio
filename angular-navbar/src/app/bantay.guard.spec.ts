import { TestBed } from '@angular/core/testing';

import { BantayGuard } from './bantay.guard';

describe('BantayGuard', () => {
  let guard: BantayGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BantayGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
