import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genelbil',
  templateUrl: './genelbil.component.html',
  styleUrls: ['./genelbil.component.css']
})
export class GenelbilComponent implements OnInit {


  title: string = '';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => { this.title = data.title });
  }

  ngOnInit(): void {
  }
}
