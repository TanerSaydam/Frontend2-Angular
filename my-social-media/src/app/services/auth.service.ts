import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { TokenDecodeModel } from '../models/token-decode.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tokenDecode: TokenDecodeModel = new TokenDecodeModel();
  token: string = "";
  constructor(
    private router: Router
  ) { }

  //Authorization => Yetki kontrolü
  //Authentication => Kullanıcı giriş kontrolü
  //Authorize

  checkAuthorize(){
    const responseString = localStorage.getItem("response");

    if(responseString){
      const token = JSON.parse(responseString)?.token;      
      if(token){
        const decode:any = jwtDecode(token);
        const date = new Date().getTime() / 1000;
        if(decode.exp < date){
          this.router.navigateByUrl("/login");
        }else{
          this.token = token;
          this.tokenDecode.imageUrl = decode["ImageUrl"];
          this.tokenDecode.name = decode["Name"];
          this.tokenDecode.userName = decode["UserName"];
          this.tokenDecode.email = decode["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"];
          this.tokenDecode.id = +decode["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
        }
      }else{
        this.router.navigateByUrl("/login");
      }
    }else{
      this.router.navigateByUrl("/login");
    }
  }
}
