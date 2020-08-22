import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderrouteComponent } from './bidderroute.component';

describe('BidderrouteComponent', () => {
  let component: BidderrouteComponent;
  let fixture: ComponentFixture<BidderrouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidderrouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
