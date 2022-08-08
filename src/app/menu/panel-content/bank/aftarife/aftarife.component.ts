import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aftarife',
  templateUrl: './aftarife.component.html',
  styleUrls: ['./aftarife.component.css']
})
export class AftarifeComponent implements OnInit {

  title: string = '';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Azami Fiyat Tarifesi');
   }

  ngOnInit(): void {
  }
}