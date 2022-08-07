import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-iztoi',
  templateUrl: './iztoi.component.html',
  styleUrls: ['./iztoi.component.css']
})
export class IztoiComponent implements OnInit {

  title:string='';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {this.title = data.title});
   }

  ngOnInit(): void {
  }
}