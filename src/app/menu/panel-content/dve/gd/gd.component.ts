import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gd',
  templateUrl: './gd.component.html',
  styleUrls: ['./gd.component.css']
})
export class GdComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Genel Duyuruları');
   }

  ngOnInit(): void {
  }
}
