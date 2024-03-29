import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-etkinlik_takvimi',
  templateUrl: './etakvim.component.html',
  styleUrls: ['./etakvim.component.css']
})
export class EtakvimComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Etkinlik Takvimi');
   }

  ngOnInit(): void {
  }
}
