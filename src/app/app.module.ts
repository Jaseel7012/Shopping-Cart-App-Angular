import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductViewTableComponent } from './product-view-table/product-view-table.component';
import { SearchAdminComponent } from './search-admin/search-admin.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
const myroute:Routes=[
  {
    path:''
    ,component:AdminComponent
  },{
    path:'user',
    component:UserLoginComponent
  },
  {
    path:'reg',
    component:UserRegisterComponent
  },{
    path:'add',
    component:AddProductComponent
  },
  {
    path:'viewt',
    component:ProductViewTableComponent
  },
  {
    path:'admsearch',
    component:SearchAdminComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserLoginComponent,
    UserRegisterComponent,
    AddProductComponent,
    ProductViewTableComponent,
    SearchAdminComponent,
    NavbarAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
