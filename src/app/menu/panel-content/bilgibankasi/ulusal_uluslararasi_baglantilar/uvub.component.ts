import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ulusal_uluslararasi_baglantilar',
  templateUrl: './uvub.component.html',
  styleUrls: ['./uvub.component.css']
})
export class UvubComponent implements OnInit {

  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Ulusal ve Uluslararası Bağlantılar');
   }


  ngOnInit(): void {
  }
}
