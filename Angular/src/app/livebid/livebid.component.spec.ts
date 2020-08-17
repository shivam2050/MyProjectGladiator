import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivebidComponent } from './livebid.component';

describe('LivebidComponent', () => {
  let component: LivebidComponent;
  let fixture: ComponentFixture<LivebidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivebidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivebidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
