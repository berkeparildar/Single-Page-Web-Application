import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uyelikislemler',
  templateUrl: './uyelikislemler.component.html',
  styleUrls: ['./uyelikislemler.component.css']
})
export class UyelikislemlerComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {this.title = data.title});
   }

  ngOnInit(): void {
  }
}