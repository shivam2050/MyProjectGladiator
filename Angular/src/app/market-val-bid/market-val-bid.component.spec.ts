import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketValBidComponent } from './market-val-bid.component';

describe('MarketValBidComponent', () => {
  let component: MarketValBidComponent;
  let fixture: ComponentFixture<MarketValBidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketValBidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketValBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
