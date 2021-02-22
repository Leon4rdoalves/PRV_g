import { Turma } from './../turma.model';
import { Component, OnInit } from '@angular/core';
import { ServAlunoService } from './../serv-aluno.service';

@Component({
  selector: 'app-aluno-read-lista',
  templateUrl: './aluno-read-lista.component.html',
  styleUrls: ['./aluno-read-lista.component.css']
})
export class AlunoReadListaComponent implements OnInit {

  turmas: Turma[]
  displayedColumns = ['id', 'descricao', 'tipo', 'participantes', 'action']

  constructor(private ServAlunoService: ServAlunoService) { }

  ngOnInit(): void {
    this.ServAlunoService.lendoTurma().subscribe(turmas => {
      this.turmas= turmas
    })
  }
}
