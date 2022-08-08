import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hrehber',
  templateUrl: './hrehber.component.html',
  styleUrls: ['./hrehber.component.css']
})
export class HrehberComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Hizmet Rehberi');
   }

  ngOnInit(): void {
  }
}