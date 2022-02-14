import { NgModule } from '@angular/core';
import { BrowserModule, Meta } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApieComponent } from './apie/apie.component';
import { PaslaugosComponent } from './paslaugos/paslaugos.component';
import { DarbaiComponent } from './darbai/darbai.component';
import { KontaktaiComponent } from './kontaktai/kontaktai.component';
import { RouterModule, Routes } from '@angular/router';
import { SwiperModule } from 'swiper/angular';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
    SwiperModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader:{
            provide: TranslateLoader,
            useFactory: httpTranslateLoader,
            deps: [HttpClient]
        }
    })
  ],
  providers: [Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient){
    return new TranslateHttpLoader(http)
}