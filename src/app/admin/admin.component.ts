import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
name=""
pswrd=""
constructor(private r:Router){}
read=()=>{
 let data={
  "name":this.name,
  "pswrd":this.pswrd
 }
 if (this.name=="admin" && this.pswrd=="1234") {
  this.r.navigate(['/add'])
  
 } else {
  alert("invalid")
  
 }
}
}
