import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kentsel_raporlar',
  templateUrl: './kentselr.component.html',
  styleUrls: ['./kentselr.component.css']
})
export class KentselrComponent implements OnInit {

  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Kentsel Raporlar');
   }


  ngOnInit(): void {
  }
}
