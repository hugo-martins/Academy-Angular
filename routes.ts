import { Routes } from '@angular/router';

import { ListAcademiaComponent } from './academia/list-academia/list-academia.component';
import { FormAcademiaComponent } from './academia/form-academia/form-academia.component';
import { ViewAcademiaComponent } from './academia/view-academia/view-academia.component';

export const routes: Routes = [
    
//{ path: 'academias/edit/:id', component: EditAcademiaComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'academias' , component: ListAcademiaComponent},
  { path: 'academias/new', component: FormAcademiaComponent},
  { path: 'academias/:id', component: ViewAcademiaComponent},

];