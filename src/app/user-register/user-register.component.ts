import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiShoppingCartService } from '../api-shopping-cart.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  pno=""
  cnfrm=""
  name=""
  email=""
  password=""

  constructor(private api:ApiShoppingCartService,private r:Router){}
  read=()=>{
   let data={
    "name":this.name,
    "email":this.email,
    "pno":this.pno,
    "password":this.password,
    "cnfrm":this.cnfrm
    


    }
  
    
    console.log(data)
    if(data.password==data.cnfrm){
      this.api.registerdata(data).subscribe(
        (resp)=>{
          console.log(resp)
          
        }
      )
      
      this.r.navigate(['/user'])
      
    }
    else{
      alert("invalid")
    }
  }
}
