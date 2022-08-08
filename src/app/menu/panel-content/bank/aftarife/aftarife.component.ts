import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aftarife',
  templateUrl: './aftarife.component.html',
  styleUrls: ['./aftarife.component.css']
})
export class AftarifeComponent implements OnInit {

  title: string = '';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => { this.title = data.title });
  }

  ngOnInit(): void {
  }
}