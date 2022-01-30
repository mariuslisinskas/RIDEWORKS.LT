import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-darbai',
  templateUrl: './darbai.component.html',
  styleUrls: ['./darbai.component.css']
})


export class DarbaiComponent implements OnInit {

    public paslaugos;

  constructor(public dataService : DataService) { }

  ngOnInit(): void {
    this.paslaugos = this.dataService.paslaugos;
  }

}
