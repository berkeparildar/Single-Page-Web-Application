import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-od',
  templateUrl: './od.component.html',
  styleUrls: ['./od.component.css']
})
export class OdComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Oda Duyuruları');
   }

  ngOnInit(): void {
  }
}