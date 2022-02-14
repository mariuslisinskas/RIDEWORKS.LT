import { Component } from '@angular/core';
import { DataService } from './data.service';
import { TranslateService } from '@ngx-translate/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers: [DataService]
})
export class AppComponent {

    public kalba:boolean = true;

  constructor(public translate:TranslateService){
    translate.addLangs(['LT', 'EN']);
    translate.setDefaultLang('LT');
  }
  switchLanguage(lang:string){
      this.translate.use(lang);
  }
}
