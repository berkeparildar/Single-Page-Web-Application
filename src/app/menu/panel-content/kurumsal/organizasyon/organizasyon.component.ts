import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organizasyon',
  templateUrl: './organizasyon.component.html',
  styleUrls: ['./organizasyon.component.css']
})
export class OrganizasyonComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {this.title = data.title});
   }

  ngOnInit(): void {
  }

}