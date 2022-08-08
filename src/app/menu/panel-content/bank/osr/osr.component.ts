import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-osr',
  templateUrl: './osr.component.html',
  styleUrls: ['./osr.component.css']
})
export class OsrComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Oda Sicili Rehberi');
   }

  ngOnInit(): void {
  }
}
