import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAcademiaComponent } from './form-academia.component';

describe('FormAcademiaComponent', () => {
  let component: FormAcademiaComponent;
  let fixture: ComponentFixture<FormAcademiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAcademiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAcademiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});