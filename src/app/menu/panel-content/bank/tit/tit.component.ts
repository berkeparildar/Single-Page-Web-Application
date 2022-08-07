import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tit',
  templateUrl: './tit.component.html',
  styleUrls: ['./tit.component.css']
})
export class TitComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {this.title = data.title});
   }

  ngOnInit(): void {
  }
}
