import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hs',
  templateUrl: './hs.component.html',
  styleUrls: ['./hs.component.css']
})
export class HsComponent implements OnInit {

  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('İZTO Hizmet Standartları');
   }

  ngOnInit(): void {
  }
}