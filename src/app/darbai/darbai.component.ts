import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-darbai',
  templateUrl: './darbai.component.html',
  styleUrls: ['./darbai.component.css']
})


export class DarbaiComponent implements OnInit {

    isActive:boolean = true;
    public paslaugos;
    public ak:number=0;
    public ilgis:number=0;
    public k:number;

    status(i){
        console.log(i)
        if(this.isActive==false){
            this.isActive=true;
        } else{
            this.isActive=false; 
        }
        
        console.log();
    }

  constructor(public dataService : DataService) { }

  ngOnInit(): void {
    this.paslaugos = this.dataService.paslaugos;
    this.ilgis = this.paslaugos.length;
  }

}
