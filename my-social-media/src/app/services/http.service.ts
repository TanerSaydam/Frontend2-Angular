import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from './error.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  apiUrl: string = "http://localhost:5030/api";
  //apiUrl: string = "http://localhost:5131/api";
  //apiUrl: string = "http://localhost:5232/api";

  constructor(
    private http: HttpClient,
    private err: ErrorService,
    private auth: AuthService
  ) { }

  get(api: string, callBack: (res:any)=>void){
    this.http.get(`${this.apiUrl}/${api}`, {
      headers: {
        "Authorization": "Bearer " + this.auth.token
      }
    })
      .subscribe({
        next: (res: any)=> callBack(res),
        error: (error: HttpErrorResponse)=> this.err.errorHandler(error)
      });
  }

  post(api: string, data: any, callBack: (res:any)=>void){
    this.http.post(`${this.apiUrl}/${api}`,data, {
      headers: {
        "Authorization": "Bearer " + this.auth.token
      }
    })
      .subscribe({
        next: (res: any)=> callBack(res),
        error: (error: HttpErrorResponse)=> this.err.errorHandler(error)
      });
  }
}
