import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evraklist',
  templateUrl: './evraklist.component.html',
  styleUrls: ['./evraklist.component.css']
})
export class EvraklistComponent implements OnInit {
  title: string = '';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => { this.title = data.title });
  }

  ngOnInit(): void {
  }
}

