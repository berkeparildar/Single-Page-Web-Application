import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-izq_ihaleleri',
  templateUrl: './izqi.component.html',
  styleUrls: ['./izqi.component.css']
})
export class IzqiComponent implements OnInit {

  title:string='';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {this.title = data.title});
   }

  ngOnInit(): void {
  }
}
