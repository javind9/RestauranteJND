import { AfterContentInit, Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterContentInit {
  public mySwiper: Swiper;

  constructor() { }

  ngAfterContentInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
    });


  }

  ngOnInit() {
  }

  onSlideNext(){
    this.mySwiper.slideNext();
  }

  onSlidePrev(){
    this.mySwiper.slidePrev();
  }

}
