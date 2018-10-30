import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppService } from './app.service';
import { FormsModule } from '@angular/forms';
import { routes } from './routes';
import {APP_BASE_HREF} from '@angular/common';

import { AcademiaService } from '../app/academia/shared/academia.service';
import { ListAcademiaComponent } from './academia/list-academia/list-academia.component';
import { FormAcademiaComponent } from './academia/form-academia/form-academia.component';
import { ViewAcademiaComponent } from './academia/view-academia/view-academia.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ListAcademiaComponent,
        FormAcademiaComponent,
        ViewAcademiaComponent
      ],
      imports:[
        RouterModule.forRoot(routes),
        FormsModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue : '/' },
        AcademiaService,
        AppService
]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Academy'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Academy');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Academy!');
  });
});
