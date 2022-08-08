import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ymalib',
  templateUrl: './ymalib.component.html',
  styleUrls: ['./ymalib.component.css']
})
export class YmalibComponent implements OnInit {
  title: string = '';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Yerli Malı Belgesi');
   }


  ngOnInit(): void {
  }
}
