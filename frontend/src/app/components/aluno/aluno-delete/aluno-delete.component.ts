import { Router, ActivatedRoute } from '@angular/router';
import { ServAlunoService } from './../serv-aluno.service';
import { Aluno } from './../aluno.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno-delete',
  templateUrl: './aluno-delete.component.html',
  styleUrls: ['./aluno-delete.component.css']
})
export class AlunoDeleteComponent implements OnInit {

  aluno: Aluno

  constructor(private ServAlunoService: ServAlunoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.ServAlunoService.lendoid(id).subscribe(aluno => {
      this.aluno = aluno
    })
  }

  deletar(): void {
    this.ServAlunoService.deletar(this.aluno.id).subscribe(() => {
      this.ServAlunoService.mostrar_msg("Participante excluido com sucesso");
      this.router.navigate(["/aluno"])
    })

  }

  cancelar(): void {
    this.router.navigate(["/aluno"])
  };

}
