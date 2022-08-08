import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ubgf',
  templateUrl: './ubgf.component.html',
  styleUrls: ['./ubgf.component.css']
})
export class UbgfComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Üye Bilgi Güncelleme Formu');
   }

  ngOnInit(): void {
  }
}