import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ekspertiz_raporu',
  templateUrl: './ekspertizr.component.html',
  styleUrls: ['./ekspertizr.component.css']
})
export class EkspertizrComponent implements OnInit {

  title: string = '';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Ekspertiz Raporu');
   }

  ngOnInit(): void {
  }
}
