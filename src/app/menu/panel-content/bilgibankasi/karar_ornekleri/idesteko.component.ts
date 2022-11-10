import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-karar_ornekleri',
  templateUrl: './idesteko.component.html',
  styleUrls: ['./idesteko.component.css']
})
export class IdestekoComponent implements OnInit {
  title: string = '';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Karar Örnekleri');
   }

  ngOnInit(): void {
  }
}
