import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticari_kazanc_beyan_formu',
  templateUrl: './tkbf.component.html',
  styleUrls: ['./tkbf.component.css']
})
export class TkbfComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Ticari Kazanç Beyan Formu');
   }

  ngOnInit(): void {
  }
}
