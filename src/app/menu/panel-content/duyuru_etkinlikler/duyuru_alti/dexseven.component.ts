import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-duyuru_alti',
  templateUrl: './dexseven.component.html',
  styleUrls: ['./dexseven.component.css']
})
export class DexsevenComponent{
  title:string='';

  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('01.03.2022 Tarihinden İtibaren Mersis Üzerinde Yapılacak Atama Ve Kuruluş Başvurularında E-İmza Uygulaması Başlıyor');
   }
  }
