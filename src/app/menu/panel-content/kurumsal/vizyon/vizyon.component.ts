import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vizyon',
  templateUrl: './vizyon.component.html',
  styleUrls: ['./vizyon.component.css']
})
export class VizyonComponent implements OnInit {
  title: string = '';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Vizyonumuz ve Misyonumuz');
   }


  ngOnInit(): void {
  }

}
