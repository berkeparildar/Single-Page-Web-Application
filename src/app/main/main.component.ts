import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private pageName:Title) {
    this.pageName.setTitle('Anasayfa - İzmir Ticaret Odası');
   }
  ngOnInit(): void {
  }

}
