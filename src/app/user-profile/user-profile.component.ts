import { Component } from '@angular/core';
import { ApiShoppingCartService } from '../api-shopping-cart.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
userId:any=""
infodata:any=[]
constructor(private api:ApiShoppingCartService){
  this.userId=localStorage.getItem("userInfo")
  let data:any={
    "id":this.userId
  }
  this.api.getuserinfo(data).subscribe(
    (response:any)=>{
      this.infodata=response
    }
  )
}

}
