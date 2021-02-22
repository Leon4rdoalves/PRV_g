import { Router } from '@angular/router';
import { ServAlunoService } from './../serv-aluno.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from './../aluno.model';

@Component({
  selector: 'app-aluno-update',
  templateUrl: './aluno-update.component.html',
  styleUrls: ['./aluno-update.component.css']
})
export class AlunoUpdateComponent implements OnInit {

  constructor(private ServAlunoService: ServAlunoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  atualizar(): void {

  }

  cancelar(): void {
    this.router.navigate(['/aluno'])
  }

}
