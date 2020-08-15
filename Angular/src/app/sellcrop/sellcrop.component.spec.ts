import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellcropComponent } from './sellcrop.component';

describe('SellcropComponent', () => {
  let component: SellcropComponent;
  let fixture: ComponentFixture<SellcropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellcropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellcropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
