import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFuncionarioComponent } from './view-funcionario.component';

describe('ViewFuncionarioComponent', () => {
  let component: ViewFuncionarioComponent;
  let fixture: ComponentFixture<ViewFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
