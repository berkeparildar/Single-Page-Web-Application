import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-izto_ihracatci_firmalar',
  templateUrl: './ifl.component.html',
  styleUrls: ['./ifl.component.css']
})
export class IflComponent implements OnInit {

  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('İzmir Ticaret Odası İhracatçı Firmalar Listesi');
   }

  ngOnInit(): void {
  }
}

