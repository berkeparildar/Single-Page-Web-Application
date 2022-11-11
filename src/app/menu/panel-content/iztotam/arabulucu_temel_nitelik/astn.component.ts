import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-arabulucu_temel_nitelik',
  templateUrl: './astn.component.html',
  styleUrls: ['./astn.component.css']
})
export class AstnComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Arabuluculuk Sürecinin Temel Nitelikleri');
   }

  ngOnInit(): void {
  }
}
