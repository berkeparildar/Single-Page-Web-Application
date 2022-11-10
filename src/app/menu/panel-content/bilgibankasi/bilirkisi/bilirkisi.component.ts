import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bilirkisi',
  templateUrl: './bilirkisi.component.html',
  styleUrls: ['./bilirkisi.component.css']
})
export class BilirkisiComponent implements OnInit {

  title: string = '';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Bilirkişi');
   }

  ngOnInit(): void {
  }
}
