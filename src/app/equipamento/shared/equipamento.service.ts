import { AppService } from './../../app.service';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Subject ,  Observable } from 'rxjs';
import { RequestOptions, Headers } from '@angular/http';
import { Equipamento } from '../shared/equipamento';


@Injectable({
  providedIn: 'root'
})

export class EquipamentoService {
  
  constructor(private appService: AppService, private apiService: ApiService) {}

  ngOnInit(){

  }

  add(equipamento): any {
    // if (!paciente.id) {
    //   paciente.id = ++this.lastId;
    // }

    return this.apiService.post(equipamento);
  }

  getAll(): any {
    return this.apiService.get();
  }

  getById(id: any): Observable<any>{

    return this.apiService.getOne(id);
  }

  private handleError(error: any): Promise<Array<any>> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  // Simulate DELETE /books/:id
  delete(id: number): any {
    console.log('delete service');
    return this.apiService.delete(id);
  }

  // Simulate PUT /books/:id
  update(newEquipamento: Equipamento, id: number) {
    return this.apiService.put('pacientes/' + id, newEquipamento);
  }

  changeMessage(message: string) {
    this.appService.changeMessage(message);
  }

  clearMessage() {
    this.appService.clearMessage();
  }

  getEndpoint(): string {
    return 'equipamentos';
  }
}
