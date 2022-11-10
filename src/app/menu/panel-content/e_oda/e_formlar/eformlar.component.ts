import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-e_formlar',
  templateUrl: './eformlar.component.html',
  styleUrls: ['./eformlar.component.css']
})
export class EformlarComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('E-Formlar');
   }

  ngOnInit(): void {
  }
}
