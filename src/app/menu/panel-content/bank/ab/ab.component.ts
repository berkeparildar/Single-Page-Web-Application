import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ab',
  templateUrl: './ab.component.html',
  styleUrls: ['./ab.component.css']
})
export class AbComponent implements OnInit {

  title:string='';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {this.title = data.title});
   }

  ngOnInit(): void {
  }
}
