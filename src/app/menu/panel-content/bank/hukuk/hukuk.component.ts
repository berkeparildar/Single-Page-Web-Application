import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hukuk',
  templateUrl: './hukuk.component.html',
  styleUrls: ['./hukuk.component.css']
})
export class HukukComponent implements OnInit {

  title: string = '';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => { this.title = data.title });
  }

  ngOnInit(): void {
  }
}