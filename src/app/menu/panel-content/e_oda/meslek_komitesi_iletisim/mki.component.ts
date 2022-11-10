import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meslek_komitesi_iletisim',
  templateUrl: './mki.component.html',
  styleUrls: ['./mki.component.css']
})
export class MkiComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Meslek Komiteleri Iletişim Formu');
   }

  ngOnInit(): void {
  }
}
