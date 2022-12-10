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
s:any=[]
constructor(private api:ApiShoppingCartService,private r:Router){}

read=()=>{
  let data={
    "email":this.email,
    "password":this.password
  }
  console.log(data)
  this.api.usercheck(data).subscribe(
    (resp:any)=>{
      console.log(resp.status)
      if(resp.status=="success"){
        let uid=resp.userId;
        console.log(uid);
        localStorage.setItem("userInfo",uid)



        this.r.navigate(['/userpro'])
      }
      else{
        alert(resp.message)
      }
      }
  )
      

   
}


}
