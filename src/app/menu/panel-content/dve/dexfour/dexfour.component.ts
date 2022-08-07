import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dexfour',
  templateUrl: './dexfour.component.html',
  styleUrls: ['./dexfour.component.css']
})
export class DexfourComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {this.title = data.title});
   }

  ngOnInit(): void {
  }
}
