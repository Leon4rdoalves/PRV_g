import { Turma } from './../turma.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ServAlunoService } from './../serv-aluno.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-update-lista',
  templateUrl: './aluno-update-lista.component.html',
  styleUrls: ['./aluno-update-lista.component.css']
})
export class AlunoUpdateListaComponent implements OnInit {

  turma: Turma

  constructor(private ServAlunoService: ServAlunoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.ServAlunoService.lendoidTurma(id).subscribe(turma => {
      this.turma = turma
    });
  }

  atualizarT(): void {
    this.ServAlunoService.atualizarTurma(this.turma).subscribe(() => {
      this.ServAlunoService.mostrar_msg('Turma atualizado com sucesso!')
      this.router.navigate(["/lista"]);
    });

  }

  cancelar(): void {
    this.router.navigate(["/lista"])
  };

}
