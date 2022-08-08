import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fzo',
  templateUrl: './fzo.component.html',
  styleUrls: ['./fzo.component.css']
})
export class FzoComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Fire ve Zayiat Oranları');
   }


  ngOnInit(): void {
  }
}
