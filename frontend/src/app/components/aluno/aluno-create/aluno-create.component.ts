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

  constructor(private ServAlunoService: ServAlunoService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  salvar(): void {
    this.ServAlunoService.mostrar_msg('Participante cadastrado com sucesso!')
  }

  cancelar(): void {
    this.router.navigate(['/aluno'])
  }

}
