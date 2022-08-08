import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faydalimb',
  templateUrl: './faydalimb.component.html',
  styleUrls: ['./faydalimb.component.css']
})
export class FaydalimbComponent implements OnInit {
  title: string = '';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Faydalı Model Belgesi');
   }

  ngOnInit(): void {
  }
}
