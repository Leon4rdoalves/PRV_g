import { ActivatedRoute, Router } from '@angular/router';
import { ServAlunoService } from './../serv-aluno.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from './../aluno.model';

@Component({
  selector: 'app-aluno-update',
  templateUrl: './aluno-update.component.html',
  styleUrls: ['./aluno-update.component.css']
})
export class AlunoUpdateComponent implements OnInit {

  aluno: Aluno

  constructor(private ServAlunoService: ServAlunoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.ServAlunoService.lendoid(id).subscribe(aluno => {
      this.aluno = aluno
    });
  }

  atualizar_p(): void {
    this.ServAlunoService.atualizar(this.aluno).subscribe(() => {
      this.ServAlunoService.mostrar_msg('Participante atualizado com sucesso!')
      this.router.navigate(["/aluno"]);
    });

  }

  cancelar(): void {
    this.router.navigate(["/aluno"])
  };

}
