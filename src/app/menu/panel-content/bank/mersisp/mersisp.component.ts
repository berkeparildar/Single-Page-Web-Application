import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mersisp',
  templateUrl: './mersisp.component.html',
  styleUrls: ['./mersisp.component.css']
})
export class MersispComponent implements OnInit {
  title: string = '';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => { this.title = data.title });
  }

  ngOnInit(): void {
  }
}