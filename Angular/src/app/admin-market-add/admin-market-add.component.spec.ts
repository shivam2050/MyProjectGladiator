import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMarketAddComponent } from './admin-market-add.component';

describe('AdminMarketAddComponent', () => {
  let component: AdminMarketAddComponent;
  let fixture: ComponentFixture<AdminMarketAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMarketAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMarketAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
