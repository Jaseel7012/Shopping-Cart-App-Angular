import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiShoppingCartService } from '../api-shopping-cart.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

email=""
password=""

constructor(private api:ApiShoppingCartService,private r:Router){}
read=()=>{
  let data={
    "email":this.email,
    "password":this.password
  }
  console.log(data)
  this.api.usercheck("http://localhost:8080/login").subscribe(
    (resp:any)=>{
      if(resp.status=="success"){
        this.r.navigate(['/user'])
      }
      else{
        alert(resp.message)
      }

    }
  )
}


}
