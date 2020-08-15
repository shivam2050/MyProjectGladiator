import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerportalComponent } from './farmerportal.component';

describe('FarmerportalComponent', () => {
  let component: FarmerportalComponent;
  let fixture: ComponentFixture<FarmerportalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerportalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
