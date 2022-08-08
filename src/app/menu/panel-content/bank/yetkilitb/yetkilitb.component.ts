import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-yetkilitb',
  templateUrl: './yetkilitb.component.html',
  styleUrls: ['./yetkilitb.component.css']
})
export class YetkilitbComponent implements OnInit {
  title: string = '';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => { this.title = data.title });
  }

  ngOnInit(): void {
  }
}
