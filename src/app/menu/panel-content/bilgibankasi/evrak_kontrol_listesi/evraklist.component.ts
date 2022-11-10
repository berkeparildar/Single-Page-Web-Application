import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evrak_kontrol_listesi',
  templateUrl: './evraklist.component.html',
  styleUrls: ['./evraklist.component.css']
})
export class EvraklistComponent implements OnInit {
  title: string = '';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Evrak Kontrol Listesi');
   }

  ngOnInit(): void {
  }
}

