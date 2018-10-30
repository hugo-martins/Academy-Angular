import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppService } from './app.service';
import { routes } from './routes';
import { HttpModule } from '@angular/http';
import { ApiService } from '../app/shared/api.service';

import { AcademiaService } from '../app/academia/shared/academia.service';
import { ListAcademiaComponent } from './academia/list-academia/list-academia.component';
import { FormAcademiaComponent } from './academia/form-academia/form-academia.component';
import { ViewAcademiaComponent } from './academia/view-academia/view-academia.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAcademiaComponent,
    FormAcademiaComponent,
    ViewAcademiaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ 
    AppService,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }