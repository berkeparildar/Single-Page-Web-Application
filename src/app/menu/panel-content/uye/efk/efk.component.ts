import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-efk',
  templateUrl: './efk.component.html',
  styleUrls: ['./efk.component.css']
})
export class EfkComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Ek Faaliyet Kodu Talebi Dilekçesi');
   }

  ngOnInit(): void {
  }
}