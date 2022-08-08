import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oubg',
  templateUrl: './oubg.component.html',
  styleUrls: ['./oubg.component.css']
})
export class OubgComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Online Üye Bilgi Güncelleme');
   }

  ngOnInit(): void {
  }
}