import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticaret_sicili_rehberi',
  templateUrl: './tsrehber.component.html',
  styleUrls: ['./tsrehber.component.css']
})
export class TsrehberComponent implements OnInit {
  title: string = '';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Ticaret Sicili Rehberi');
   }

  ngOnInit(): void {
  }
}

