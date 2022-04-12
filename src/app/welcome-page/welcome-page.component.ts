import { Component, OnInit } from '@angular/core';
declare var anime: any;                                  // declare like this

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
