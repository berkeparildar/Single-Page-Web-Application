import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gdanisman',
  templateUrl: './gdanisman.component.html',
  styleUrls: ['./gdanisman.component.css']
})
export class GdanismanComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Gayrimenkul Danışmanlığı');
   }

  ngOnInit(): void {
  }
}

