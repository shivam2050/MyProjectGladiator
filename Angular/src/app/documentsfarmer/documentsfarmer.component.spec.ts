import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsfarmerComponent } from './documentsfarmer.component';

describe('DocumentsfarmerComponent', () => {
  let component: DocumentsfarmerComponent;
  let fixture: ComponentFixture<DocumentsfarmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsfarmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsfarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
