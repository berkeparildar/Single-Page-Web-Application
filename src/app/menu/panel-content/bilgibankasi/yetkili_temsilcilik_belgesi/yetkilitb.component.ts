import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-yetkili_temsilcilik_belgesi',
  templateUrl: './yetkilitb.component.html',
  styleUrls: ['./yetkilitb.component.css']
})
export class YetkilitbComponent implements OnInit {
  title: string = '';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Yetkili Temsilcilik Belgesi');
   }

  ngOnInit(): void {
  }
}
