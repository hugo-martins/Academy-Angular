import { Routes } from '@angular/router';

import { ListEquipamentoComponent } from './equipamento/list-equipamento/list-equipamento.component';
import { FormEquipamentoComponent } from './equipamento/form-equipamento/form-equipamento.component';
import { ViewEquipamentoComponent } from './equipamento/view-equipamento/view-equipamento.component';
//import { EditEquipamentoComponent } from './equipamento/edit-equipamento/edit-equipamento.component';
//import { DashboardComponent } from './dashboard/dashboard.component';

import { ListAcademiaComponent } from './academia/list-academia/list-academia.component';
import { FormAcademiaComponent } from './academia/form-academia/form-academia.component';
import { ViewAcademiaComponent } from './academia/view-academia/view-academia.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'equipamentos' , component: ListEquipamentoComponent},
  { path: 'equipamentos/new', component: FormEquipamentoComponent},
  { path: 'equipamentos/:id', component: ViewEquipamentoComponent},
  //{ path: 'equipamentos/edit/:id', component: EditEquipamentoComponent},
  //{ path: 'dashboard', component: DashboardComponent},
  //{ path: 'academias/edit/:id', component: EditAcademiaComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'academias' , component: ListAcademiaComponent},
  { path: 'academias/new', component: FormAcademiaComponent},
  { path: 'academias/:id', component: ViewAcademiaComponent},

];
