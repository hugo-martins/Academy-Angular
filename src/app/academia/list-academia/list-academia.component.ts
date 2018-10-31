import { Academia } from './../shared/academia';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../shared/api.service';
import { AcademiaService } from '../shared/academia.service';

@Component({
  selector: 'app-list-academia',
  templateUrl: './list-academia.component.html',
  styleUrls: ['./list-academia.component.css']
})
export class ListAcademiaComponent implements OnInit {

  message: string;
  equipamentos: Array<any> = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: AcademiaService,
    private api: ApiService

  ) { }
  
  ngOnInit() {
    this.service.getAll().subscribe(data => {
      this.equipamentos = data;});
  }

  getPacientes() {
    this.equipamentos = this.service.getAll();
  }

  reload(){
    alert('Apagado com sucesso!');
    window.location.reload();
  }

  show(id) {
    this.service.clearMessage();
    this.router.navigate(['/academias', id]);
    return false;
  }

  edit(id) {
    this.service.clearMessage();
    this.router.navigate(['/academias/form/', id]);
    return false;
  }

  destroy(id) {
    if (confirm('Tem certeza?')) {
      this.service.delete(+id);
      this.service.changeMessage('Academia foi deletado');
      this.reload();
    }
    return false;
  }


}