import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ido',
  templateUrl: './ido.component.html',
  styleUrls: ['./ido.component.css']
})
export class IdoComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('İhracat Destek Ofisi');
   }

  ngOnInit(): void {
  }
}