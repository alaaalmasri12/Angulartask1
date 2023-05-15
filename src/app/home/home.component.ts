import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  names: User[] = [
    {name:"alaa",age:25,Salary:300},
    {name:"rami",age:35,Salary:500},
    {name:"ahmad",age:30,Salary:400},
  ]
name:string[]=["alaa","isam","mohammad"]
test:string="active"
num:number=2
Salary:number= 3000;
}
