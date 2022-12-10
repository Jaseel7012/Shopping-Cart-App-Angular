import { Component } from '@angular/core';
import { ApiShoppingCartService } from '../api-shopping-cart.service';

@Component({
  selector: 'app-product-view-table',
  templateUrl: './product-view-table.component.html',
  styleUrls: ['./product-view-table.component.css']
})
export class ProductViewTableComponent {
  constructor(private api:ApiShoppingCartService){
    this.api.fetchdata().subscribe(
      (resp)=>{
        this.data=resp;
      }
    )
  }
data:any=[]
}
