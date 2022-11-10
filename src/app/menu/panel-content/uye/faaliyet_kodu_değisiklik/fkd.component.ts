import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faaliyet_kodu_değisiklik',
  templateUrl: './fkd.component.html',
  styleUrls: ['./fkd.component.css']
})
export class FkdComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Faaliyet Kodu Değişiklik Talebi Dilekçesi');
   }

  ngOnInit(): void {
  }
}
