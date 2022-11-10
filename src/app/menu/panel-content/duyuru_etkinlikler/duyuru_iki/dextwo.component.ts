import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-duyuru_iki',
  templateUrl: './dextwo.component.html',
  styleUrls: ['./dextwo.component.css']
})
export class DextwoComponent implements OnInit {

  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Vergi Mükellefiyet Durumu Kontrolü');
   }
  ngOnInit(): void {
  }
}
