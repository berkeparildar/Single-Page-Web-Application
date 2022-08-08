import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-odahesap',
  templateUrl: './odahesap.component.html',
  styleUrls: ['./odahesap.component.css']
})
export class OdahesapComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Oda Hesapları');
   }


  ngOnInit(): void {
  }

}