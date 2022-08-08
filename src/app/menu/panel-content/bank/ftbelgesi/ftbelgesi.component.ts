import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ftbelgesi',
  templateUrl: './ftbelgesi.component.html',
  styleUrls: ['./ftbelgesi.component.css']
})
export class FtbelgesiComponent implements OnInit {
  title: string = '';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => { this.title = data.title });
  }

  ngOnInit(): void {
  }
}
