import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ipar',
  templateUrl: './ipar.component.html',
  styleUrls: ['./ipar.component.css']
})
export class IparComponent implements OnInit {
  title: string = '';
  constructor(private route: ActivatedRoute, private pageName: Title) {
    this.route.data.subscribe(data => { this.title = data.title });
    this.pageName.setTitle('İhracat Pazar Araştırması Raporları');
  }
  ngOnInit(): void {
  }
}