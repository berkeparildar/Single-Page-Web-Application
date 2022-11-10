import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gemiler',
  templateUrl: './gemiler.component.html',
  styleUrls: ['./gemiler.component.css']
})
export class GemilerComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('2022 Yılında İzmir Limanına Gelecek Olan Kruvaziyer Gemileri');
   }
  ngOnInit(): void {
  }
}
