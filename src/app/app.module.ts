import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormClientComponent } from './client/form-client/form-client.component';
import { FormsModule } from '@angular/forms';
import { ViewClientComponent } from './client/view-client/view-client.component';
import { ListClientComponent } from './client/list-client/list-client.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormClientComponent,
    ViewClientComponent,
    ListClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
