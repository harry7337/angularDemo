import { AfterViewInit, Component } from '@angular/core';
import { Recipe } from './hero';
import { NavbarService } from './navbar.service';
declare var anime: any;                                  // declare like this

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'Lab 8';

  constructor(public nav: NavbarService) { }

  ngOnInit(): void {
    this.nav.show();
  }

  ngAfterViewInit(): void {
    var textWrapper = document.querySelector('.an-2');
    if(textWrapper&&textWrapper.textContent)
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    
    anime.timeline({loop: true})
      .add({
        targets: '.an-2 .letter',
        opacity: [0,1],
        easing: "easeInOutQuad",
        duration: 2250,
        delay: (_el: any, i: number) => 150 * (i+1)
      }).add({
        targets: '.an-2',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
      });
    
  }
  // recipe1: Recipe={
  //   img:"",
  //   heading:"How to Make Easy Garlic Butter Naan",
  //   subheading:"Make perfectly garlicky and buttery homemade garlic naan at home with this basic easy naan bread recipe",
  //   desc:
  //   inst:"",
  //   tut:""
  // }
}
