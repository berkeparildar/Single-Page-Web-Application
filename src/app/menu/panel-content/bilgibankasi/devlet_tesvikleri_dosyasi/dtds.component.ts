import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-devlet_tesvikleri_dosyasi',
  templateUrl: './dtds.component.html',
  styleUrls: ['./dtds.component.css']
})
export class DtdsComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Devlet Teşvikleri Dosyası');
   }

  ngOnInit(): void {
  }
}
