import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sikaone',
  templateUrl: './sikaone.component.html',
  styleUrls: ['./sikaone.component.css']
})
export class SikaoneComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('İzmir Ticaret Odası Şikayet ve Öneri Süreci');
   }


  ngOnInit(): void {
  }
}
