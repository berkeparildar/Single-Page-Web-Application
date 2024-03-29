import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fuar',
  templateUrl: './fuar.component.html',
  styleUrls: ['./fuar.component.css']
})
export class FuarComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Fuarlar');
   }

  ngOnInit(): void {
  }
}
