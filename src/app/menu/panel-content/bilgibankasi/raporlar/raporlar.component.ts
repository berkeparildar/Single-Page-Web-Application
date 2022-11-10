import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-raporlar',
  templateUrl: './raporlar.component.html',
  styleUrls: ['./raporlar.component.css']
})
export class RaporlarComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Raporlar');
   }
  ngOnInit(): void {
  }
}

