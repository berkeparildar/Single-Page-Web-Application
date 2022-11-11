import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ieu_ihale',
  templateUrl: './ieui.component.html',
  styleUrls: ['./ieui.component.css']
})
export class IeuiComponent implements OnInit {

  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('İzmir Ekonomi Üniversitesi İhaleleri');
   }

  ngOnInit(): void {
  }
}
