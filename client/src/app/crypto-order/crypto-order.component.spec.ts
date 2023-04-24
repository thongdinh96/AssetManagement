import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoOrderComponent } from './crypto-order.component';

describe('CryptoOrderComponent', () => {
  let component: CryptoOrderComponent;
  let fixture: ComponentFixture<CryptoOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
