import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  KContents = ['nVizyonumuz ve Misyonumuz', 'nTemel Değerlerimiz ve Yönetim Politikamız', 'tOrganizasyon Yapısı', 'nLogo ve Kurumsal Kimlik', 'nOda Hesapları', 'nStratejik Planlar ve Çalışma Programları', 'nKardeş Odalar', 'nKVKK', 'yEtkinlik Takvimi', 'nHizmet Rehberi'];
  KDrop = ['tYönetim Kurulu', 'tMeclis', 'tDisiplin Kurulu', 'tMeslek Kurulu Üyeleri', 'tOrganizasyon Şeması', 'yÖzel Gün ve Haftalar Takvimi', 'yKomite Toplantı Takvimi']

  EContents = ['nMeslek Komitesi Çalışmaları', 'tE-Formlar', 'yBilgi Edinme Birimi', 'nVizyon Dergisi']
  EDrop = ['tÜye Bilgi Güncelleme Formu', 'tÜye Memnuniyet Anketi', 'tÇağrı Merkezi Memnuniyeti Anketi', 'tMeslek Komiteleri İletişim Formu', 'tTicari Kazanç Beyan Formu', 'tİzmir Ticaret Odası Şikayet ve Öneri Süreci', 'tGüncelleme', 'yGerçek Kişiler İçin Bilgi Edinme Formu', 'yTüzel Kişiler İçin Bilgi Edinme Formu']

  UContents = ['tÜyelik İşlemleri', 'yÜyeler', 'nİZTO Hizmet Standartları', 'nFaaliyet Kodları ve Meslek Grupları Tanımları'];
  UDrop = ['tOnline Üye Bilgi Güncelleme', 'tEk Faaliyet Kodu Talebi Dilekçesi', 'tFaaliyet Kodu Değişiklik Talebi Dilekçesi', 'tOda Kayıt Beyannameleri', 'tÜyelik Avantajları', 'tÜyelik Ücretleri', 't2022 Hizmet Ücretleri Tarifesi', 'tAidat Ödemeleri', 'tİndirimli Kuruluşlar']

  DContents = ['tDuyurular', 'nEğitimler'];
  DDrop = ['tGenel Duyurular', 'tOda Duyurular', 'tFuar Duyuruları', 'tDış Ticaret Duyuruları', 'tTicaret Sicil Duyuruları'];

  IContents = ['nİzmir Ticaret Odası İhalelerimiz', 'nİZTO Eğitim ve Sağlık Vakfı İhaleleri', 'nİZQ İhaleleri', 'nİzmir Ekonomi Üniversitesi İhaleleri', 'nİZFAŞ İhaleleri'];
  IDrop = ['dad'];
  TContents = ['nİhracat Destek Ofisi', 'nGirişimcilik', 'nVize Hizmetleri', 'nFuarlar', 'nİhaleler'];
  TDrop = ['dsadsadsa'];

  BContents = ['nTicaret Sicili Rehberi', 'nOda Sicili Rehberi', 'nTicari İşletme Tanımları', 'nTicari İşlemler Rehberi', 'nKruvaziyer Turizmi', 'nHukuk Sahfası', 'nFire ve Zaiyat Oranları', 'nGayrimenkul Danışmanlığı', 'nYenişehir Ticaret Merkezi', 'nUlusal ve Uluslararası Bağlantılar', 'nİzmir Ticaret Odası İhracatçı Firmalar Listesi', 'nİzmir', 'nSıkça Sorulan Sorular'];
  BDrop = ['dsadssad'];

  ZContents = ['yArabuluculuk Sürecinin Temel Nitelikleri'];
  ZDrop = ['yAlternatif Çözüm Yolları', 'yArabuluculuk Kuralları', 'yArabulucu Listesi', 'yArabuluculuk Süreci Akış Şeması', 'tKolay Başvuru'];

  ray = [this.KContents, this.EContents, this.UContents, this.DContents, this.IContents, this.TContents, this.BContents, this.ZContents];
  dRay = [this.KDrop, this.EDrop, this.UDrop, this.DDrop, this.IDrop, this.TDrop, this.BDrop, this.ZDrop];

  @Input('ind') num: number = 0;
  @Input('ArrayIndex') int: number = 0;
  @Output() toParent = new EventEmitter<string>();

  sendFunc(value: string) {
    this.toParent.emit(value);
  }

  someFunc() {
    document.getElementById('react').classList.add('active');
  }


  indexFind() { }

  constructor() {
    console.log(this.int);
  }
  ngOnInit(): void { }
}
