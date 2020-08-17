import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbidderComponent } from './viewbidder.component';

describe('ViewbidderComponent', () => {
  let component: ViewbidderComponent;
  let fixture: ComponentFixture<ViewbidderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewbidderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbidderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
