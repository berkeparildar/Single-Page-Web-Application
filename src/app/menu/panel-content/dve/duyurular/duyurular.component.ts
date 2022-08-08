import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-duyurular',
  templateUrl: './duyurular.component.html',
  styleUrls: ['./duyurular.component.css']
})
export class DuyurularComponent implements OnInit {

  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Duyurular');
   }

  ngOnInit(): void {
  }
}