import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-osr',
  templateUrl: './osr.component.html',
  styleUrls: ['./osr.component.css']
})
export class OsrComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {this.title = data.title});
   }

  ngOnInit(): void {
  }
}
