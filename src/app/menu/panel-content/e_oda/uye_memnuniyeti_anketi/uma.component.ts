import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uye_memnuniyeti_anketi',
  templateUrl: './uma.component.html',
  styleUrls: ['./uma.component.css']
})
export class UmaComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Üye Memnuniyet Anketi');
   }

  ngOnInit(): void {
  }
}
