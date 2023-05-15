import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
userName:string="Alaa"
Link="http://www.facebook.com"
imgsrc="../../assets/download.jfif"
Salary:number=5000
sayhi()
{
  alert("hi");
}
test(e:Event)
{
console.log(e);  
}
}
