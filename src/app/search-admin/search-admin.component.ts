import { Component } from '@angular/core';
import { ApiShoppingCartService } from '../api-shopping-cart.service';

@Component({
  selector: 'app-search-admin',
  templateUrl: './search-admin.component.html',
  styleUrls: ['./search-admin.component.css']
})
export class SearchAdminComponent {
name=""
search:any=[]
constructor(private api:ApiShoppingCartService){}
read=()=>{
  let data={
    "name":this.name
  }
  this.api.productsearch(data).subscribe(
    (resp:any)=>{
      console.log(resp)
      this.search=resp
      

    }
  )
}


}
