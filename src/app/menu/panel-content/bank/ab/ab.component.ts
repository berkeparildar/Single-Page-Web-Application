import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ab',
  templateUrl: './ab.component.html',
  styleUrls: ['./ab.component.css']
})
export class AbComponent implements OnInit {

  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('AB Raporları');
   }


  ngOnInit(): void {
  }
}
