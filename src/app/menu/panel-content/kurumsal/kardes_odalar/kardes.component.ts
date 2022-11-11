import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kardes_odalar',
  templateUrl: './kardes.component.html',
  styleUrls: ['./kardes.component.css']
})
export class KardesComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Kardeş Odalar');
   }

  ngOnInit(): void {
  }

}
