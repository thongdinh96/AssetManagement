import { TestBed } from '@angular/core/testing';

import { CryptoOrderService } from './crypto-order.service';

describe('CryptoOrderService', () => {
  let service: CryptoOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
