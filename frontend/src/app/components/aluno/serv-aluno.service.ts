import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { Aluno } from './aluno.model';
import { map, catchError } from 'rxjs/operator';


@Injectable({
  providedIn: 'root'
})
export class ServAlunoService {

  baseUrl = "http://93.188.161.223:9000/participantes"

  constructor(private snackbar: MatSnackBar, 
    private http: HttpClient) { }

  mostrar_msg(msg: string, isError: boolean = false): void {
    this.snackbar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-erro"] : ["msg-sucesso"]
    })
  }

  inserindo(Aluno:Aluno): Observable<Aluno>{
    return this.http.post<Aluno>(this.baseUrl, Aluno).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    return EMPTY
  }


  lendo():Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.baseUrl)
  }

  lendoid(id: number): Observable<Aluno> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Aluno>(url)
  }

  atualizar(aluno: Aluno): Observable<Aluno>{
    const url = `${this.baseUrl}/${aluno.id}`
    return this.http.put<Aluno>(url, aluno)
  }

  deletar(id: number): Observable<Aluno> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Aluno>(url)
  }

}
