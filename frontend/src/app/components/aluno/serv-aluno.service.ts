import { Aluno } from './aluno.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServAlunoService {

  baseUrl = "http://93.188.161.223:9000/participantes"

  constructor(private snackbar: MatSnackBar, 
    private http: HttpClient) { }

  mostrar_msg(msg: string): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  inserindo(Aluno:Aluno): Observable<Aluno>{
    return this.http.post<Aluno>(this.baseUrl, Aluno)
  }

}
