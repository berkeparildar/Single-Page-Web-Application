import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fuar_raporlari',
  templateUrl: './fuarraportlari.component.html',
  styleUrls: ['./fuarraportlari.component.css']
})
export class FuarraportlariComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Fuar Raporları');
   }

  ngOnInit(): void {
  }
}
