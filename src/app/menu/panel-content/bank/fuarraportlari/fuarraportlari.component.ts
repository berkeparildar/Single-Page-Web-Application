import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fuarraportlari',
  templateUrl: './fuarraportlari.component.html',
  styleUrls: ['./fuarraportlari.component.css']
})
export class FuarraportlariComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {this.title = data.title});
   }

  ngOnInit(): void {
  }
}
