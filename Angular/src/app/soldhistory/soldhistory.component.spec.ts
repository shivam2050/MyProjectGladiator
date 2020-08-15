import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldhistoryComponent } from './soldhistory.component';

describe('SoldhistoryComponent', () => {
  let component: SoldhistoryComponent;
  let fixture: ComponentFixture<SoldhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoldhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
