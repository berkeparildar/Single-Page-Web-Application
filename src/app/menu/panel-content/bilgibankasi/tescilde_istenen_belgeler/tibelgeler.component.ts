import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tescilde_istenen_belgeler',
  templateUrl: './tibelgeler.component.html',
  styleUrls: ['./tibelgeler.component.css']
})
export class TibelgelerComponent implements OnInit {
  title: string = '';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Tescilde İstenen Belgeler');
   }

  ngOnInit(): void {
  }
}

