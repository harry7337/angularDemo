import { Component, OnInit } from '@angular/core';
import { Recipe } from '../hero';
import { NavbarService } from '../navbar.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  recipe: Recipe ={
    img:"",
    heading:"How to Make Easy Garlic Butter Naan",
    subheading:"Make perfectly garlicky and buttery homemade garlic naan at home with this basic easy naan bread recipe",
    desc: "",
    inst:"",
    tut:""
  };
  videoURL="https://www.youtube.com/embed/WnkTTvAVisU";
  safeURL: any;

  constructor(public nav: NavbarService, private _sanitizer: DomSanitizer){
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
 }

  ngOnInit(): void {
    this.nav.show();
  }

}
