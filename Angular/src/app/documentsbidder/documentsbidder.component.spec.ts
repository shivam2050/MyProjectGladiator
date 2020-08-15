import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsbidderComponent } from './documentsbidder.component';

describe('DocumentsbidderComponent', () => {
  let component: DocumentsbidderComponent;
  let fixture: ComponentFixture<DocumentsbidderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsbidderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsbidderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
