import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ftbelgesi',
  templateUrl: './ftbelgesi.component.html',
  styleUrls: ['./ftbelgesi.component.css']
})
export class FtbelgesiComponent implements OnInit {
  title: string = '';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Fiili Tüketim Belgesi');
   }

  ngOnInit(): void {
  }
}
