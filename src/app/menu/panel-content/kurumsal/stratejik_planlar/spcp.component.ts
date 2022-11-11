import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stratejik_planlar',
  templateUrl: './spcp.component.html',
  styleUrls: ['./spcp.component.css']
})
export class SpcpComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Stratejik Planlar ve Çalışma Programları');
   }
  ngOnInit(): void {
  }

}
