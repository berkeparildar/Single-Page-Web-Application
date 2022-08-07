import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ytm',
  templateUrl: './ytm.component.html',
  styleUrls: ['./ytm.component.css']
})
export class YtmComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {this.title = data.title});
   }

  ngOnInit(): void {
  }
}