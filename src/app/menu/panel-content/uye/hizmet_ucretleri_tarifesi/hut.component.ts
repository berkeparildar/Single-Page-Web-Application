import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hizmet_ucretleri_tarifesi',
  templateUrl: './hut.component.html',
  styleUrls: ['./hut.component.css']
})
export class HutComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('2022 Hizmet Ücretleri Tarifesi');
   }

  ngOnInit(): void {
  }
}
