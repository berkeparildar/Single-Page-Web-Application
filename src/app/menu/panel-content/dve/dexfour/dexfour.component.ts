import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dexfour',
  templateUrl: './dexfour.component.html',
  styleUrls: ['./dexfour.component.css']
})
export class DexfourComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('01.03.2022 Tarihinden İtibaren Mersis Üzerinde Yapılacak Atama Ve Kuruluş Başvurularında E-İmza Uygulaması Başlıyor');
   }

  ngOnInit(): void {
  }
}
