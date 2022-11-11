import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ogiks',
  templateUrl: './ogiks.component.html',
  styleUrls: ['./ogiks.component.css']
})
export class OgiksComponent implements OnInit {
  title: string = '';
  constructor(private route: ActivatedRoute, private pageName: Title) {
    this.route.data.subscribe(data => { this.title = data.title });
    this.pageName.setTitle('Odamızda Gerçekleştirilen İhracat Konulu Sunumlar');
  }
  ngOnInit(): void {
  }
}