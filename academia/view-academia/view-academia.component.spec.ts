import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { routes } from '../../routes';
import { AppService } from '../../app.service';
import { AcademiaService } from '../shared/academia.service';

import { FormAcademiaComponent } from '../form-academia/form-academia.component';
import { ListAcademiaComponent } from '../list-academia/list-academia.component';
import { ViewAcademiaComponent } from './view-academia.component';

describe('ViewEquipamentoComponent', () => {
  let component: ViewAcademiaComponent;
  let fixture: ComponentFixture<ViewAcademiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormAcademiaComponent,
        ListAcademiaComponent,
        ViewAcademiaComponent
        
      ],
      imports: [
        RouterModule.forRoot(routes),
        FormsModule
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' },
        AppService,
        AcademiaService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAcademiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});