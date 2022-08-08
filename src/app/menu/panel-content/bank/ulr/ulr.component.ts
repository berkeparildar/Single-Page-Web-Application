import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ulr',
  templateUrl: './ulr.component.html',
  styleUrls: ['./ulr.component.css']
})
export class UlrComponent implements OnInit {

  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Ülke Raporları');
   }


  ngOnInit(): void {
  }
}
