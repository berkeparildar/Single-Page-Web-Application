import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gercek_kisiler',
  templateUrl: './gkibef.component.html',
  styleUrls: ['./gkibef.component.css']
})
export class GkibefComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Gerçek Kişiler İçin Bilgi Edinme Formu');
   }

  ngOnInit(): void {
  }
}
