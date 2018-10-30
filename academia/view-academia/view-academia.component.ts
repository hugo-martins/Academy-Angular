import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AcademiaService } from '../shared/academia.service';
import { Academia } from '../shared/academia';

@Component({
  selector: 'app-view-academia',
  templateUrl: './view-academia.component.html',
  styleUrls: ['./view-academia.component.css']
})
export class ViewAcademiaComponent implements OnInit {

  public academia: any = {};
  public id:number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private academiaService: AcademiaService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      const id = params['id'];
      if(id){
        this.academiaService.getById(id).subscribe((academia: any) => {
          if (academia) {
            this.academia = academia;
            this.id = id;
          } else {
            alert('Academia não encontrado!');
            this.router.navigate(['/academias']);
          }
        });
      };
    });
  }
  edit(){
    this.router.navigate(['/academias/form/', this.id]);
    return false;
  }

}