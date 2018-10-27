import { Component, OnInit } from '@angular/core';

import { FuncionarioService } from '../shared/funcionario.service';

@Component({
  selector: 'app-form-funcionario',
  templateUrl: './form-funcionario.component.html',
  styleUrls: ['./form-funcionario.component.css']
})
export class FormFuncionarioComponent implements OnInit {

  // {
  //   name: String,
  //   telefone: String,
  //   dataNascimento: Date,
  //   endereco: String,
  //   email: String,
  //   cpf: String
  // }

  funcionario: any = {
      name: '',
      telefone: '',
      dataNascimento: null,
      endereco: '',
      email: '',
      cpf: ''
    }


  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.funcionario);
    this.funcionarioService.post(this.funcionario).subscribe((result) => {
      console.log(result);
    });
  }

}
