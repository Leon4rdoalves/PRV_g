import { Turma } from './../turma.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ServAlunoService } from './../serv-aluno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-delete-lista',
  templateUrl: './aluno-delete-lista.component.html',
  styleUrls: ['./aluno-delete-lista.component.css']
})
export class AlunoDeleteListaComponent implements OnInit {

  turma: Turma

  constructor(private ServAlunoService: ServAlunoService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.ServAlunoService.lendoidTurma(id).subscribe(turma => {
      this.turma = turma
    })
  }

  deletarTurma(): void {
    this.ServAlunoService.deletarTurma(this.turma.id).subscribe(() => {
      this.ServAlunoService.mostrar_msg("Turma excluida com sucesso");
      this.router.navigate(["/lista"])
    })

  }

  cancelar(): void {
    this.router.navigate(["/lista"])
  };
}
