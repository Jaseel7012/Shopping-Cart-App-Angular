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
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProductViewCardComponent } from './product-view-card/product-view-card.component';
import { NavbarComponent } from './navbar/navbar.component'
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
  },{
    path:'viewc',
    component:ProductViewCardComponent
  },{
    path:'userpro',
    component:UserProfileComponent
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
    NavbarAdminComponent,
    UserProfileComponent,
    ProductViewCardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
