import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bfo',
  templateUrl: './bfo.component.html',
  styleUrls: ['./bfo.component.css']
})
export class BfoComponent implements OnInit {

  title: string = '';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => { this.title = data.title });
  }

  ngOnInit(): void {
  }
}
