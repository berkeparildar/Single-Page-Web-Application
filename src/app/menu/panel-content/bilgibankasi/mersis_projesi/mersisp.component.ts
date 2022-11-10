import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mersis_projesi',
  templateUrl: './mersisp.component.html',
  styleUrls: ['./mersisp.component.css']
})
export class MersispComponent implements OnInit {
  title: string = '';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Mersis Projesi');
   }

  ngOnInit(): void {
  }
}
