import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderhistoryComponent } from './bidderhistory.component';

describe('BidderhistoryComponent', () => {
  let component: BidderhistoryComponent;
  let fixture: ComponentFixture<BidderhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidderhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
