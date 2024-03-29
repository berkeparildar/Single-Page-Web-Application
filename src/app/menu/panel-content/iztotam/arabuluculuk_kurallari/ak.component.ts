import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-arabuluculuk_kurallari',
  templateUrl: './ak.component.html',
  styleUrls: ['./ak.component.css']
})
export class AkComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Arabuluculuk Kuralları');
   }

  ngOnInit(): void {
  }
}
