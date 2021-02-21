import { Router } from '@angular/router';
import { ServAlunoService } from './../serv-aluno.service';
import { Aluno } from './../aluno.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-create',
  templateUrl: './aluno-create.component.html',
  styleUrls: ['./aluno-create.component.css']
})
export class AlunoCreateComponent implements OnInit {

  aluno: Aluno = {
    id: 10,
    nome: "Leonardo",
    email: "leo@leo.com",
    observacoes: "só testando",
    
  }

  constructor(private ServAlunoService: ServAlunoService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  salvar(): void {
    this.ServAlunoService.inserindo(this.aluno).subscribe(() => {
      this.ServAlunoService.mostrar_msg('Participante cadastrado com sucesso!')
      this.router.navigate(['/aluno'])
    })
    
  }

  cancelar(): void {
    this.router.navigate(['/aluno'])
  }

}
