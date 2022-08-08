import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atakarnesi',
  templateUrl: './atakarnesi.component.html',
  styleUrls: ['./atakarnesi.component.css']
})
export class AtakarnesiComponent implements OnInit {

  title: string = '';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => { this.title = data.title });
  }

  ngOnInit(): void {
  }
}
