import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tmalibelgesi',
  templateUrl: './tmalibelgesi.component.html',
  styleUrls: ['./tmalibelgesi.component.css']
})
export class TmalibelgesiComponent implements OnInit {
  title: string = '';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Türk Malı Belgesi');
   }

  ngOnInit(): void {
  }
}

