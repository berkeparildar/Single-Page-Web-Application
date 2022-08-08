import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ekspertizr',
  templateUrl: './ekspertizr.component.html',
  styleUrls: ['./ekspertizr.component.css']
})
export class EkspertizrComponent implements OnInit {

  title: string = '';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => { this.title = data.title });
  }

  ngOnInit(): void {
  }
}
