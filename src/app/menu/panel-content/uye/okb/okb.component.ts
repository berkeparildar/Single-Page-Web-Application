import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-okb',
  templateUrl: './okb.component.html',
  styleUrls: ['./okb.component.css']
})
export class OkbComponent implements OnInit {

  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Oda Kayıt Beyannameleri');
   }

  ngOnInit(): void {
  }
}