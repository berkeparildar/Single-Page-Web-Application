import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-asas',
  templateUrl: './asas.component.html',
  styleUrls: ['./asas.component.css']
})
export class AsasComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Arabuluculuk Süreci Akış Şeması');
   }

  ngOnInit(): void {
  }
}