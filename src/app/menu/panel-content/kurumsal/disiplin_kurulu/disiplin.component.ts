import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-disiplin_kurulu',
  templateUrl: './disiplin.component.html',
  styleUrls: ['./disiplin.component.css']
})
export class DisiplinComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Disiplin Kurulu');
   }

  ngOnInit(): void {
  }
}
