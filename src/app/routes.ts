import { Routes } from '@angular/router';

import { ListEquipamentoComponent } from './equipamento/list-equipamento/list-equipamento.component';
import { FormEquipamentoComponent } from './equipamento/form-equipamento/form-equipamento.component';
import { ViewEquipamentoComponent } from './equipamento/view-equipamento/view-equipamento.component';
//import { EditEquipamentoComponent } from './equipamento/edit-equipamento/edit-equipamento.component';
//import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'equipamentos' , component: ListEquipamentoComponent},
  { path: 'equipamentos/new', component: FormEquipamentoComponent},
  { path: 'equipamentos/:id', component: ViewEquipamentoComponent},
  //{ path: 'equipamentos/edit/:id', component: EditEquipamentoComponent},
  //{ path: 'dashboard', component: DashboardComponent}

];