import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  constructor(private pageName:Title) {
    this.pageName.setTitle('COVID - 19 TEDBİR VE DESTEKLERİ');
   }

  ngOnInit(): void {
  }

}
