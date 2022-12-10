import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiShoppingCartService {

  constructor(private http:HttpClient) { }
  fetchdata=()=>{
    return this.http.get("http://localhost:8080/view")
  }
  dataadd=(data:any)=>{
    return this.http.post("http://localhost:8080/add",data)
  }
  registerdata=(data:any)=>{
    return this.http.post("http://localhost:8080/user",data)

  }
  usercheck=(data:any)=>{
    return this.http.post("http://localhost:8080/log",data)
  }
  productsearch=(data:any)=>{
    return this.http.post("http://localhost:8080/search",data)
  }
  getuserinfo=(data:any)=>{
    return this.http.post("http://localhost:8080/userid",data)
  }
}
