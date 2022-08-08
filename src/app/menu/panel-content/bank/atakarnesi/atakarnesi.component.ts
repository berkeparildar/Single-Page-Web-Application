import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atakarnesi',
  templateUrl: './atakarnesi.component.html',
  styleUrls: ['./atakarnesi.component.css']
})
export class AtakarnesiComponent implements OnInit {

  title: string = '';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Ata Karnesi');
   }

  ngOnInit(): void {
  }
}
