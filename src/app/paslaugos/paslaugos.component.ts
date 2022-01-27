import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

import SwiperCore, { Swiper, Virtual, Pagination, Autoplay, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([ Virtual, Pagination, Autoplay, Navigation ]);


@Component({
  selector: 'app-paslaugos',
  templateUrl: './paslaugos.component.html',
  styleUrls: ['./paslaugos.component.css'],
})

export class PaslaugosComponent implements OnInit {


    @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  slideNext(){
    this.swiper.swiperRef.slideNext(100);
  }
  slidePrev(){
    this.swiper.swiperRef.slidePrev(100);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
