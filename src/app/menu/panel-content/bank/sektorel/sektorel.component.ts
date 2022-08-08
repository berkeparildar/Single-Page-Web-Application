import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sektorel',
  templateUrl: './sektorel.component.html',
  styleUrls: ['./sektorel.component.css']
})
export class SektorelComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Sektörel Raporlar');
   }

  ngOnInit(): void {
  }
}
