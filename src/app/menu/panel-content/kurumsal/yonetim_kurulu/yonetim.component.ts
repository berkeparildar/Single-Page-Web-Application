import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-yonetim_kurulu',
  templateUrl: './yonetim.component.html',
  styleUrls: ['./yonetim.component.css']
})
export class YonetimComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Yönetim Kurulu');
   }

  ngOnInit(): void {
  }
}
