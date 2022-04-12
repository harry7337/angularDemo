import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    psw: "",
    name: ""
  };

  myInput = document.getElementById("psw");
  letter = document.getElementById("letter");
  capital = document.getElementById("capital");
  number = document.getElementById("number");
  length = document.getElementById("length");
  message = document.getElementById("message");
  static  lowerCaseLetters = /[a-z]/g;
  static upperCaseLetters = /[A-Z]/g;
  static numbers = /[0-9]/g;

  constructor() { }

  ngOnInit(): void {
    console.log("Heroes init");
  }
  
  
}


