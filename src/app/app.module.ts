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


import { FormClientComponent } from './client/form-client/form-client.component';
import { ViewClientComponent } from './client/view-client/view-client.component';
import { ListClientComponent } from './client/list-client/list-client.component';

import { FormEquipamentoComponent } from './equipamento/form-equipamento/form-equipamento.component';
import { ViewEquipamentoComponent } from './equipamento/view-equipamento/view-equipamento.component';
import { ListEquipamentoComponent } from './equipamento/list-equipamento/list-equipamento.component';

@NgModule({
  declarations: [
    AppComponent,
    FormClientComponent,
    ViewClientComponent,
    ListClientComponent,
    FormEquipamentoComponent,
    ViewEquipamentoComponent,
    ListEquipamentoComponent
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
