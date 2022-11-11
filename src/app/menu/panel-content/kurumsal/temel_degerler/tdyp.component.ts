import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-temel_degerler',
  templateUrl: './tdyp.component.html',
  styleUrls: ['./tdyp.component.css']
})
export class TdypComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Temel Değerlerimiz ve Yönetim Politikamız');
   }
  ngOnInit(): void {
  }

}
