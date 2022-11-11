import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organizasyon_yapisi',
  templateUrl: './organizasyon.component.html',
  styleUrls: ['./organizasyon.component.css']
})
export class OrganizasyonComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Organizasyon Yapısı');
   }
  ngOnInit(): void {
  }

}
