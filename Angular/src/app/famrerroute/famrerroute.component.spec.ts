import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamrerrouteComponent } from './famrerroute.component';

describe('FamrerrouteComponent', () => {
  let component: FamrerrouteComponent;
  let fixture: ComponentFixture<FamrerrouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamrerrouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamrerrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
