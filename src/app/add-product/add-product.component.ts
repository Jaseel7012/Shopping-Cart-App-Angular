import { Component } from '@angular/core';
import { ApiShoppingCartService } from '../api-shopping-cart.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
name=""
image=""
category=""
price=""
constructor(private api:ApiShoppingCartService){}
read=()=>{
  let data={
    "name":this.name,
    "image":this.image,
    "category":this.category,
    "price":this.price

  }
  this.api.dataadd(data).subscribe(
    (response)=>{
      console.log(response)
    }
  )
}
}
