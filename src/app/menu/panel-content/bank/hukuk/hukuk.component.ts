import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hukuk',
  templateUrl: './hukuk.component.html',
  styleUrls: ['./hukuk.component.css']
})
export class HukukComponent implements OnInit {

  title: string = '';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Hukuk Sayfası');
   }

  ngOnInit(): void {
  }
}