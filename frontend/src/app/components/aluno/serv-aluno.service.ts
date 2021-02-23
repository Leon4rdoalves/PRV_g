import { Turma } from './turma.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { Aluno } from './aluno.model';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServAlunoService {

  baseUrl = "http://93.188.161.223:9000/participantes"
  baseUrlTurma = "http://93.188.161.223:9000/turma"

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

  inserindo(Aluno: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.baseUrl, Aluno).pipe(
      map((obj) => obj), catchError(e => this.errorHandler(e))
    );
  }

  inserindoTurma(Turma: Turma): Observable<Turma> {
    return this.http.post<Turma>(this.baseUrlTurma, Turma).pipe(
      map((obj) => obj), catchError(e => this.errorHandler(e))
    );
  }

  lendo(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.baseUrl).pipe(
      map((obj) => obj), catchError(e => this.errorHandler(e))
    );
  }

  lendoTurma(): Observable<Turma[]> {
    return this.http.get<Turma[]>(this.baseUrlTurma).pipe(
      map(obj => obj), catchError(e => this.errorHandler(e))
    )
  }

  lendoid(id: number): Observable<Aluno> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Aluno>(url).pipe(
      map((obj) => obj), catchError(e => this.errorHandler(e))
    );
  }

  lendoidTurma(id: number): Observable<Turma> {
    const url = `${this.baseUrlTurma}/${id}`
    return this.http.get<Turma>(url).pipe(
      map((obj) => obj), catchError(e => this.errorHandler(e))
    );
  }


  atualizar(Aluno: Aluno): Observable<Aluno> {
    const url = `${this.baseUrl}/${Aluno.id}`
    return this.http.put<Aluno>(url, Aluno).pipe(
      map((obj) => obj), catchError(e => this.errorHandler(e))
    );
  }

  atualizarTurma(Turma: Turma): Observable<Turma> {
    const url = `${this.baseUrlTurma}/${Turma.id}`
    return this.http.put<Turma>(url, Turma).pipe(
      map((obj) => obj), catchError(e => this.errorHandler(e))
    );
  }

  deletar(id: number): Observable<Aluno> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Aluno>(url).pipe(
      map((obj) => obj), catchError(e => this.errorHandler(e))
    );
  }

  deletarTurma(id: number): Observable<Turma> {
    const url = `${this.baseUrlTurma}/${id}`
    return this.http.delete<Turma>(url).pipe(
      map((obj) => obj), catchError(e => this.errorHandler(e))
    );
  }

  
  errorHandler(e: any): Observable<any> {
    console.log(e)
    this.mostrar_msg("Ops, algo deu errado!", true);
    return EMPTY
  }

}
