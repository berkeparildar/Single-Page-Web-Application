import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-indirimli_kuruluslar',
  templateUrl: './ik.component.html',
  styleUrls: ['./ik.component.css']
})
export class IkComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('İndirimli Kuruluşlar');
   }

  ngOnInit(): void {
  }
}
