import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  name;
 
  listContents = ['Vizyonumuz ve Misyonumuz', 'Temel Değerlerimiz ve Yönetim Politikamız', 'Organizasyon Yapısı', 'Logo ve Kurumsal Kimlik', 'Oda Hesapları', 'Stratejik Planlar ve Çalışma Programları', 'Kardeş Odalar', 'KVKK', 'Etkinlik Takvimi', 'Hizmet Rehberi'];
  @Input('ind') num: number = 0;
  length: number = this.listContents.length;

  constructor() {
  }

  ngOnInit(): void {
    for (let i = 0; i < this.length; i++) {
      this.fun();
      console.log(this.num);
    }
  }
  fun() {
    this.num++;
  }
}
