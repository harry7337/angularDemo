import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero } from '../hero';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  user: Hero = {
    psw: "",
    name: ""
  };
  isValid=false;
  constructor() {
   }

   ngOnInit(): void {
    
   }


   onSubmit(login:any) {
    this.isValid=login.form.status;
   }
  

}
