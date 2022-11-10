import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uyelik_ucretleri',
  templateUrl: './uu.component.html',
  styleUrls: ['./uu.component.css']
})
export class UuComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Üyelik Ücretleri');
   }
  ngOnInit(): void {
  }
}
