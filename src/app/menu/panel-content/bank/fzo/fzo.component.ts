import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fzo',
  templateUrl: './fzo.component.html',
  styleUrls: ['./fzo.component.css']
})
export class FzoComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {this.title = data.title});
   }

  ngOnInit(): void {
  }
}
