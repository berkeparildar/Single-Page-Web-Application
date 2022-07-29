import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  @Output() shareDropArray = new EventEmitter<Array<Array<string>>>;

  onDropArrayShare(arr: Array<Array<string>>) {
    this.shareDropArray.emit(arr);
  }

  KContents = ['Vizyonumuz ve Misyonumuz', 'Temel Değerlerimiz ve Yönetim Politikamız', 'Organizasyon Yapısı', 'Logo ve Kurumsal Kimlik', 'Oda Hesapları', 'Stratejik Planlar ve Çalışma Programları', 'Kardeş Odalar', 'KVKK', 'Etkinlik Takvimi', 'Hizmet Rehberi'];

  EContents = ['Meslek Komitesi Çalışmaları', 'Temel Değerlerimiz ve Yönetim Politikamız', 'E-Formlar', 'Bilgi Edinme Birimi', 'Vizyon Dergisi']

  UContents = ['Üyelik İşlemleri', 'Üyeler', 'İZTO Hizmet Standartları', 'Faaliyet Kodları ve Meslek Grupları Tanımları'];

  DContents = ['Duyurular', 'Eğitimler'];

  IContents = ['  İzmir Ticaret Odası İhalelerimiz', 'İZTO Eğitim ve Sağlık Vakfı İhaleleri', 'İZQ İhaleleri', 'İzmir Ekonomi Üniversitesi İhaleleri', 'İZFAŞ İhaleleri'];

  TContents = ['İhracat Destek Ofisi', 'Girişimcilik', 'Vize Hizmetleri', 'Fuarlar', 'İhaleler'];

  BContents = ['Ticaret Sicili Rehberi', 'Oda Sicili Rehberi', 'Ticari İşletme Tanımları', 'Ticari İşlemler Rehberi', 'Kruvaziyer Turizmi', 'Hukuk Sahfası', 'Fire ve Zaiyat Oranları', 'Gayrimenkul Danışmanlığı', 'Yenişehir Ticaret Merkezi', 'Ulusal ve Uluslararası Bağlantılar', 'İzmir Ticaret Odası İhracatçı Firmalar Listesi', 'İzmir', 'Sıkça Sorulan Sorular'];

  ZContents = ['Arabuluculuk Sürecinin Temel Nitelikleri'];

  ray = [this.KContents, this.EContents, this.UContents, this.DContents, this.IContents, this.TContents, this.BContents, this.ZContents];


  @Input('ind') num: number = 0;

  @Output() toParent = new EventEmitter<string>();
  sendFunc(value: string) {
    this.toParent.emit(value);
  }
  @Input('ArrayIndex') int: number = 0;

  constructor() {
    console.log(this.int);
  }
  ngOnInit(): void { }
}
