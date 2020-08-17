import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminbidapprovalComponent } from './adminbidapproval.component';

describe('AdminbidapprovalComponent', () => {
  let component: AdminbidapprovalComponent;
  let fixture: ComponentFixture<AdminbidapprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminbidapprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminbidapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
