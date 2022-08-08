import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dex',
  templateUrl: './dex.component.html',
  styleUrls: ['./dex.component.css']
})
export class DexComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('İZQda Toplantı ve Etkinliklerinize Prestij Katın');
   }

  ngOnInit(): void {
  }
}
