import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genel_bilgiler',
  templateUrl: './genelbil.component.html',
  styleUrls: ['./genelbil.component.css']
})
export class GenelbilComponent implements OnInit {


  title: string = '';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Genel Bilgiler');
   }
  ngOnInit(): void {
  }
}
