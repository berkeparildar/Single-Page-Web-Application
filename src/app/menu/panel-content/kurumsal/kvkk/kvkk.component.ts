import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kvkk',
  templateUrl: './kvkk.component.html',
  styleUrls: ['./kvkk.component.css']
})
export class KvkkComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('KVKK');
   }

  ngOnInit(): void {
  }

}