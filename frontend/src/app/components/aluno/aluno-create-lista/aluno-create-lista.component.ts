import { Router } from '@angular/router';
import { ServAlunoService } from './../serv-aluno.service';
import { Turma } from './../turma.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-aluno-create-lista',
  templateUrl: './aluno-create-lista.component.html',
  styleUrls: ['./aluno-create-lista.component.css']
})
export class AlunoCreateListaComponent implements OnInit {

  turma: Turma = {
    descricao: "",
    tipo: ""
  }

  constructor(private ServAlunoService: ServAlunoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  salvar(): void {
    this.ServAlunoService.inserindoTurma(this.turma).subscribe(() => {
      this.ServAlunoService.mostrar_msg('Participante cadastrado com sucesso!')
      this.router.navigate(['/lista'])
    })
    
  }

  cancelar(): void {
    this.router.navigate(['/lista'])
  }

}
