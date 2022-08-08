import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-acy',
  templateUrl: './acy.component.html',
  styleUrls: ['./acy.component.css']
})
export class AcyComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Alternatif Çözüm Yolları');
   }

  ngOnInit(): void {
  }
}