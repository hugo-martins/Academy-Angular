import { Component, OnInit } from '@angular/core';

import { ClientService } from '../shared/client.service';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.css']
})
export class FormClientComponent implements OnInit {

  
  client: any = {
      name: '',
      telefone: '',
      dataNascimento: null,
      endereco: '',
      email: '',
      cpf: ''
    }


  constructor(private clientService: ClientService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.client);
    this.clientService.post(this.client).subscribe((result) => {
      console.log(result);
    });
  }

}
