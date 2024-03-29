import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aidat_odeme',
  templateUrl: './ao.component.html',
  styleUrls: ['./ao.component.css']
})
export class AoComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Aidat Ödemeleri');
   }

  ngOnInit(): void {
  }
}
