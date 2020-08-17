import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptbidderComponent } from './acceptbidder.component';

describe('AcceptbidderComponent', () => {
  let component: AcceptbidderComponent;
  let fixture: ComponentFixture<AcceptbidderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptbidderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptbidderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
