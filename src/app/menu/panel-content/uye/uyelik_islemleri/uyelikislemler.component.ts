import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uyelik_islemleri',
  templateUrl: './uyelikislemler.component.html',
  styleUrls: ['./uyelikislemler.component.css']
})
export class UyelikislemlerComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Üyelik İşlemleri');
   }

  ngOnInit(): void {
  }
}
