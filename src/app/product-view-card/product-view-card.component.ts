import { Component } from '@angular/core';
import { ApiShoppingCartService } from '../api-shopping-cart.service';

@Component({
  selector: 'app-product-view-card',
  templateUrl: './product-view-card.component.html',
  styleUrls: ['./product-view-card.component.css']
})
export class ProductViewCardComponent {
  name=""
 constructor(private api:ApiShoppingCartService){
  this.api.fetchdata().subscribe(
    (response:any)=>{
      this.data=response
      
    }
  )
  
 }
 

  data:any=[]

  read=()=>{
    let data1:any={
      "name":this.name
    }
    if(this.name.length==0){
      this.searchdata=[]
    }else{
      this.api.productsearch(data1).subscribe(
        (resp:any)=>{
          if(resp.length==0){
            this.searchdata=[]
          }
          else{
            this.searchdata=resp
          }

        }
      )
    }
  }

  searchdata:any=[]
  
}
