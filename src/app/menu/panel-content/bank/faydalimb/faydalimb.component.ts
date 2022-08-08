import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faydalimb',
  templateUrl: './faydalimb.component.html',
  styleUrls: ['./faydalimb.component.css']
})
export class FaydalimbComponent implements OnInit {
  title: string = '';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => { this.title = data.title });
  }

  ngOnInit(): void {
  }
}
