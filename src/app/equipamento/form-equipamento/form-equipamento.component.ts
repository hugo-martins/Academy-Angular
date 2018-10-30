import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../shared/api.service';
//import { Equipamento} from '../equipamento';
import { EquipamentoService } from '../shared/equipamento.service';

@Component({
  selector: 'app-form-equipamento',
  templateUrl: './form-equipamento.component.html',
  styleUrls: ['./form-equipamento.component.css']
})
export class FormEquipamentoComponent implements OnInit {

  
  equipamento: any = {
      name: '',
      peso: '',
      tipo: '',
      descricao: '',
    }


  constructor(private EquipamentoService: EquipamentoService, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.equipamento);
    this.EquipamentoService.add(this.equipamento).subscribe((result) => {
      console.log(result);
      alert('Equipamento Cadastrado');
      this.router.navigate(['/equipamentos/'])
    },
   error => { 
     alert(error.error.message);
     console.log(error.error.message);
    });
  }

}
