import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tkibef',
  templateUrl: './tkibef.component.html',
  styleUrls: ['./tkibef.component.css']
})
export class TkibefComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Tüzel Kişiler İçin Bilgi Edinme Formu');
   }

  ngOnInit(): void {
  }
}