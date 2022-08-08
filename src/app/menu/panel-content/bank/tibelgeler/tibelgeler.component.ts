import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tibelgeler',
  templateUrl: './tibelgeler.component.html',
  styleUrls: ['./tibelgeler.component.css']
})
export class TibelgelerComponent implements OnInit {
  title: string = '';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => { this.title = data.title });
  }

  ngOnInit(): void {
  }
}

