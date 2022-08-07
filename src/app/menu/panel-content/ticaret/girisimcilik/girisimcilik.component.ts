import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-girisimcilik',
  templateUrl: './girisimcilik.component.html',
  styleUrls: ['./girisimcilik.component.css']
})
export class GirisimcilikComponent implements OnInit {

  title:string='';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {this.title = data.title});
   }

  ngOnInit(): void {
  }
}