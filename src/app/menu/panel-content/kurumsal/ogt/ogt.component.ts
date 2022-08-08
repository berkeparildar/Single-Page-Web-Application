import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ogt',
  templateUrl: './ogt.component.html',
  styleUrls: ['./ogt.component.css']
})
export class OgtComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Özel Gün ve Haftalar Takvimi');
   }

  ngOnInit(): void {
  }
}