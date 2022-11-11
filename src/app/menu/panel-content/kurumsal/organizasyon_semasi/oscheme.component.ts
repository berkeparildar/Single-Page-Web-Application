import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organizasyon_semasi',
  templateUrl: './oscheme.component.html',
  styleUrls: ['./oscheme.component.css']
})
export class OschemeComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Organizasyon Şeması');
   }
  ngOnInit(): void {
  }

}
