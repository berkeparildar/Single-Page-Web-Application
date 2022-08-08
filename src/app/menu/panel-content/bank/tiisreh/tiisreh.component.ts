import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tiisreh',
  templateUrl: './tiisreh.component.html',
  styleUrls: ['./tiisreh.component.css']
})
export class TiisrehComponent implements OnInit {
  title: string = '';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Ticari İşlemler Rehberi');
   }

  ngOnInit(): void {
  }
}

