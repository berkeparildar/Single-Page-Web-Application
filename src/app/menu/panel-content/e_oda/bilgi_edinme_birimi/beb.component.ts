import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bilgi_edinme_birimi',
  templateUrl: './beb.component.html',
  styleUrls: ['./beb.component.css']
})
export class BebComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Bilgi Edinme Birimi');
   }
  ngOnInit(): void {
  }
}
