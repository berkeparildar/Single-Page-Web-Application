import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tobbslk',
  templateUrl: './tobbslk.component.html',
  styleUrls: ['./tobbslk.component.css']
})
export class TobbslkComponent implements OnInit {
  title: string = '';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('TOBB Sigorta Levhaya Kayıt');
   }


  ngOnInit(): void {
  }
}
