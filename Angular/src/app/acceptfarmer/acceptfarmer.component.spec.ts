import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptfarmerComponent } from './acceptfarmer.component';

describe('AcceptfarmerComponent', () => {
  let component: AcceptfarmerComponent;
  let fixture: ComponentFixture<AcceptfarmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptfarmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptfarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
