import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment'
import { EMPTY, Observable }  from 'rxjs';
import { map, catchError, isEmpty }  from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar'


@Injectable({
  providedIn: 'root'
})

export class ServiceAllService<T>{
    title = '';
    environmentName = '';
    environmentUrl = ''
  
  constructor(
    private http : HttpClient,
    private snackBar: MatSnackBar
          
  ) 
  { 
    this.environmentName = environment.environmentName;
    this.environmentUrl = environment.BASE_URL
  }

  Cadastrar(T : T, endpoint: string) : Observable <T>{

    return this.http.post<T>(this.environmentUrl + endpoint , T).pipe(
      map(obj => obj),
      catchError(e => this.erroHandler(e))      
    );
  }

  BuscarTodos(endpoint: string): Observable<T[]>{
    return this.http.get<T[]>(this.environmentUrl + endpoint).pipe(
      map(obj => obj),
      catchError(e => this.erroHandler(e))
    ); 
  }

  BuscarPorId(id: string, endpoint: string): Observable<T>{
    const url = `${this.environmentUrl + endpoint}/${id}`

    return this.http.get<T>(url).pipe(
      map(obj => obj),
      catchError(e => this.erroHandler(e))
    );
  }

  Atualizar(T: T, endpoint: string): Observable<T> {    
  return this.http.put<T>(this.environmentUrl + endpoint, T).pipe(
    map(obj => obj),
    catchError(e => this.erroHandler(e))
    );
  }

  Excluir (id: number, endpoint : string)  : Observable<T> {
        
        const url = `${this.environmentUrl + endpoint}/${id}`      
        
        return this.http.delete<T>(url).pipe(
        map(obj => obj),
        catchError(e => this.erroHandler(e))
        )
  }

  erroHandler(e: any) : Observable<any>{
    let mensagem = e.error;
    this.showMessage(e.error, true )
    return EMPTY
  }

  showMessage(msg : string, isErro: boolean = false) : void { 
    this.snackBar.open(msg, 'X' , { 
      duration : 3000,
      horizontalPosition: "right",
      verticalPosition : "top",
      panelClass : isErro ? ['msg-error'] : ['msg-sucess']
    })
  }

}
