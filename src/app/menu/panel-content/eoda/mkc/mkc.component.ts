import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mkc',
  templateUrl: './mkc.component.html',
  styleUrls: ['./mkc.component.css']
})
export class MkcComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Meslek Komitesi Çalışmaları');
   }

  ngOnInit(): void {
  }
}