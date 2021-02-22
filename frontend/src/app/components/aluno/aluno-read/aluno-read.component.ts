import { ServAlunoService } from './../serv-aluno.service';
import { Aluno } from './../aluno.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-read',
  templateUrl: './aluno-read.component.html',
  styleUrls: ['./aluno-read.component.css']
})

export class AlunoReadComponent implements OnInit {

  alunos: Aluno[]
  displayedColumns = ['id', 'nome', 'email', 'observacoes', 'turma', 'action']

  constructor(private ServAlunoService: ServAlunoService) { }

  ngOnInit(): void {
    this.ServAlunoService.lendo().subscribe(alunos => {
      this.alunos= alunos
    })
  }
}
