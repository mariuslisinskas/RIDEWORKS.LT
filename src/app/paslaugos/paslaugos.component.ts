import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

import SwiperCore, { Pagination, Autoplay, EffectFade } from 'swiper';

// install Swiper modules
SwiperCore.use([ Pagination, Autoplay ]);


@Component({
  selector: 'app-paslaugos',
  templateUrl: './paslaugos.component.html',
  styleUrls: ['./paslaugos.component.css'],
})

export class PaslaugosComponent implements OnInit {
    
    swiperConfig: any = {
        slidesPerView: 1,
        breakpoints: {
            1100: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            700: {
                slidesPerView: 2,
                spaceBetween: 10
            }

        }
    }
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
