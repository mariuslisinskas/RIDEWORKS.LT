import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApieComponent } from './apie/apie.component';
import { PaslaugosComponent } from './paslaugos/paslaugos.component';
import { DarbaiComponent } from './darbai/darbai.component';
import { KontaktaiComponent } from './kontaktai/kontaktai.component';
import { RouterModule, Routes } from '@angular/router';
import { SwiperModule } from 'swiper/angular';

const appRoutes:Routes=[
    {path:"", component:ApieComponent},
    {path:"paslaugos", component:PaslaugosComponent},
    {path:"darbai", component:DarbaiComponent},
    {path:"kontaktai", component:KontaktaiComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ApieComponent,
    PaslaugosComponent,
    DarbaiComponent,
    KontaktaiComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
