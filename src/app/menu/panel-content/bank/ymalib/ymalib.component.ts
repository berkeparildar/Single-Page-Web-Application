import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ymalib',
  templateUrl: './ymalib.component.html',
  styleUrls: ['./ymalib.component.css']
})
export class YmalibComponent implements OnInit {
  title: string = '';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => { this.title = data.title });
  }

  ngOnInit(): void {
  }
}
