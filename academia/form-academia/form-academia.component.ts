import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../shared/api.service';
//import { Academia } from '../Academia';
import { AcademiaService } from '../shared/academia.service';

@Component({
  selector: 'app-form-academia',
  templateUrl: './form-academia.component.html',
  styleUrls: ['./form-academia.component.css']
})
export class FormAcademiaComponent implements OnInit {
  
  academia: any = {
      id: '',
      name: '',
      tipo: '',
      descricao: '',
    }

  constructor(private AcademiaService: AcademiaService, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.academia);
    this.AcademiaService.add(this.academia).subscribe((result) => {
      console.log(result);
      alert('Academia Cadastrado');
      this.router.navigate(['/academias/'])
    },
   error => { 
     alert(error.error.message);
     console.log(error.error.message);
    });
  }

}