import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropdeclinedComponent } from './cropdeclined.component';

describe('CropdeclinedComponent', () => {
  let component: CropdeclinedComponent;
  let fixture: ComponentFixture<CropdeclinedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropdeclinedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropdeclinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
