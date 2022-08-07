import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kentselr',
  templateUrl: './kentselr.component.html',
  styleUrls: ['./kentselr.component.css']
})
export class KentselrComponent implements OnInit {

  title:string='';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {this.title = data.title});
   }

  ngOnInit(): void {
  }
}
