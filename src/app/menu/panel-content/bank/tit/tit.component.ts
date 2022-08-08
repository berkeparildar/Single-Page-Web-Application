import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tit',
  templateUrl: './tit.component.html',
  styleUrls: ['./tit.component.css']
})
export class TitComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Ticari İşletme Tanımları');
   }


  ngOnInit(): void {
  }
}
