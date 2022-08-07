import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dextwo',
  templateUrl: './dextwo.component.html',
  styleUrls: ['./dextwo.component.css']
})
export class DextwoComponent implements OnInit {

  title:string='';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {this.title = data.title});
   }

  ngOnInit(): void {
  }
}
