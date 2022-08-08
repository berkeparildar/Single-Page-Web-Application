import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ktt',
  templateUrl: './ktt.component.html',
  styleUrls: ['./ktt.component.css']
})
export class KttComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Komite Toplantı Takvimi');
   }


  ngOnInit(): void {
  }
}