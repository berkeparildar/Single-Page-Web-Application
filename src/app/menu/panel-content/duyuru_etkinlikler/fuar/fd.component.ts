import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fuar',
  templateUrl: './fd.component.html',
  styleUrls: ['./fd.component.css']
})
export class FdComponent implements OnInit {

  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Fuar Duyuruları');
   }

  ngOnInit(): void {
  }
}
