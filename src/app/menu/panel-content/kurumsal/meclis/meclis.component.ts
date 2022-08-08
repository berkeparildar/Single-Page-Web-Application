import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meclis',
  templateUrl: './meclis.component.html',
  styleUrls: ['./meclis.component.css']
})
export class MeclisComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Meclis');
   }

  ngOnInit(): void {
  }
}