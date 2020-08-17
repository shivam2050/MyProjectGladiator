import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddercropboughtComponent } from './biddercropbought.component';

describe('BiddercropboughtComponent', () => {
  let component: BiddercropboughtComponent;
  let fixture: ComponentFixture<BiddercropboughtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiddercropboughtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiddercropboughtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
