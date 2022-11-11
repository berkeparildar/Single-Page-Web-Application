import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-izfas_ihale',
  templateUrl: './ii.component.html',
  styleUrls: ['./ii.component.css']
})
export class IiComponent implements OnInit {

  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('İZFAŞ İhaleleri');
   }

  ngOnInit(): void {
  }
}
