import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-iztoes',
  templateUrl: './iztoes.component.html',
  styleUrls: ['./iztoes.component.css']
})
export class IztoesComponent implements OnInit {

  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('İZTO Eğitim ve Sağlık Vakfi İhaleleri');
   }

  ngOnInit(): void {
  }
}