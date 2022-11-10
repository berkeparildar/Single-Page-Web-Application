import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uyelik_avantajları',
  templateUrl: './ua.component.html',
  styleUrls: ['./ua.component.css']
})
export class UaComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Üyelik Avantajları');
   }
  ngOnInit(): void {
  }
}
