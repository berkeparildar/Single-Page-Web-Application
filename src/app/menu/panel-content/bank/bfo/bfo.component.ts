import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bfo',
  templateUrl: './bfo.component.html',
  styleUrls: ['./bfo.component.css']
})
export class BfoComponent implements OnInit {

  title: string = '';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Belge Form ve Örnek');
   }

  ngOnInit(): void {
  }
}
