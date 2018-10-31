import { Academia } from './../shared/academia';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcademiaService } from '../shared/academia.service';

@Component({
  selector: 'app-form-academia',
  templateUrl: './form-academia.component.html',
  styleUrls: ['./form-academia.component.css']
})
export class FormAcademiaComponent implements OnInit {

  private academia: Academia = null;
  private id: number;

  constructor(private router: Router, private route: ActivatedRoute, private academiaService: AcademiaService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.academiaService.getById(id).subscribe((academia: any) => {
          if (academia) {
            this.academia = academia;
            this.id = id;
            console.log(`Academia with id '${id}' not found, returning to list`);
            this.router.navigate(['/Academias']);
          }
        });
      };
    });
  }

  onSubmit(form: any){
    this.academia.nome = form.nome;
    this.academia.id = form.id;
    this.academia.contato = form.contato;
    this.academia.endereco = form.endereco;
    this.academiaService.update(this.academia, this.id).subscribe((result) => {
      console.log(result);
      alert('Academia atualizado!');
      this.router.navigate(['/equipamento/',result['id']]);
    }, error => { alert('Um erro aconteceu, tente novamente!'); });
  }

}