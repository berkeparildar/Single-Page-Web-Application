import { DOCUMENT } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataTransfer } from 'src/app/dataTransfer.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  int: number;
  strin: string;

  KContents = ['nVizyonumuz ve Misyonumuz', 'nTemel Değerlerimiz ve Yönetim Politikamız', 'tOrganizasyon Yapısı', 'nLogo ve Kurumsal Kimlik', 'nOda Hesapları', 'nStratejik Planlar ve Çalışma Programları', 'nKardeş Odalar', 'nKVKK', 'yEtkinlik Takvimi', 'nHizmet Rehberi'];
  KDrop = ['tYönetim Kurulu', 'tMeclis', 'tDisiplin Kurulu', 'tOrganizasyon Şeması', 'yÖzel Gün ve Haftalar Takvimi', 'yKomite Toplantı Takvimi']

  EContents = ['nMeslek Komitesi Çalışmaları', 'tE-Formlar', 'yBilgi Edinme Birimi', 'nVizyon Dergisi']
  EDrop = ['tÜye Bilgi Güncelleme Formu', 'tÜye Memnuniyet Anketi', 'tÇağrı Merkezi Memnuniyeti Anketi', 'tMeslek Komiteleri Iletişim Formu', 'tTicari Kazanç Beyan Formu', 'tİzmir Ticaret Odası Şikayet ve Öneri Süreci', 'yGerçek Kişiler İçin Bilgi Edinme Formu', 'yTüzel Kişiler İçin Bilgi Edinme Formu']

  UContents = ['tÜyelik Işlemleri', 'nÜyeler', 'nİZTO Hizmet Standartları',];
  UDrop = ['tOnline Üye Bilgi Güncelleme', 'tEk Faaliyet Kodu Talebi Dilekçesi', 'tFaaliyet Kodu Değişiklik Talebi Dilekçesi', 'tOda Kayıt Beyannameleri', 'tÜyelik Avantajları', 'tÜyelik Ücretleri', 't2022 Hizmet Ücretleri Tarifesi', 'tAidat Ödemeleri', 'tİndirimli Kuruluşlar']

  DContents = ['tDuyurular', 'nEğitimler'];
  DDrop = ['tGenel Duyurular', 'tOda Duyuruları', 'tFuar Duyuruları', 'tDış Ticaret Duyuruları', 'tTicaret Sicil Duyuruları'];

  IContents = ['nİzmir Ticaret Odası İhalelerimiz', 'nİZTO Eğitim ve Sağlık Vakfı İhaleleri', 'nİZQ İhaleleri', 'nİzmir Ekonomi Üniversitesi İhaleleri', 'nİZFAŞ İhaleleri'];
  IDrop = ['dad'];
  TContents = ['nİhracat Destek Ofisi', 'nGirişimcilik', 'nVize Hizmetleri', 'nFuarlar'];
  TDrop = ['dsadsadsa'];

  BContents = ['yTicaret Sicili Rehberi', 'nOda Sicili Rehberi', 'nTicari İşletme Tanımları', 'qTicari İşlemler Rehberi', 'nKruvaziyer Turizmi', 'nHukuk Sayfası', 'tRaporlar', 'nFire ve Zaiyat Oranları', 'nGayrimenkul Danışmanlığı', 'nYenişehir Ticaret Merkezi', 'nUlusal ve Uluslararası Bağlantılar', 'nİzmir Ticaret Odası İhracatçı Firmalar Listesi', 'nSıkça Sorulan Sorular'];
  BDrop = ['tAB Raporları', 'tFuar Raporları', 'tKentsel Raporlar', 'tSektörel Raporlar', 'tDevlet Teşvikleri Dosyası', 'tÜlke Raporları', 'yKarar Örnekleri', 'yTescilde İstenen Belgeler',
    'yBelge Form ve Örnek', 'xMevzuat', 'yMersis Projesi', 'yGenel Bilgiler', 'yEvrak Kontrol Listesi', 'qAntrepo Belgesi', 'qAta Karnesi', 'qAzami Fiyat Tarifesi', 'qBilirkişi', 'qEkspertiz Raporu', 'qFaydalı Model Belgesi', 'qFiili Tüketim Belgesi', 'qYetkili Temsilcilik Belgesi', 'qYerli Malı Belgesi', 'qTürk Malı Belgesi', 'qTOBB Sigorta Levhaya Kayıt'];

  ZContents = ['yArabuluculuk Sürecinin Temel Nitelikleri'];
  ZDrop = ['yAlternatif Çözüm Yolları', 'yArabuluculuk Kuralları', 'yArabuluculuk Süreci Akış Şeması', 'pKolay Başvuru'];

  ray = [this.KContents, this.EContents, this.UContents, this.DContents, this.IContents, this.TContents, this.BContents, this.ZContents];
  dRay = [this.KDrop, this.EDrop, this.UDrop, this.DDrop, this.IDrop, this.TDrop, this.BDrop, this.ZDrop];

  trying: string = this.KContents[0].replaceAll(' ', '-');

  func(some: string) {
    let eva: string = some;
    let evaL: string = some;
    if (some.includes('İ')) {
      eva = some.replaceAll('İ', 'I');
    }
    evaL = eva.toLowerCase();
    let asd: string = evaL;
    let dsa: string = evaL;
    let sad: string = evaL;
    let das: string = evaL;
    let sda: string = evaL;
    let ads: string = evaL;
    let asa: string = evaL;
    let aaa: string = evaL;
    let ddd: string = evaL;
    if ((evaL.includes('ğ')) || (evaL.includes('ö')) || (evaL.includes('ı')) || (evaL.includes('ş')) || (evaL.includes('ç')) || (evaL.includes('ü')) || (evaL.includes('ö')) ||
      (evaL.includes('Ü'))) {
      asd = evaL.replaceAll('ğ', 'g');
      dsa = asd.replaceAll('ö', 'o');
      sad = dsa.replaceAll('ı', 'i');
      das = sad.replaceAll('ş', 's');
      sda = das.replaceAll('ç', 'c');
      ads = sda.replaceAll('ü', 'u');
      asa = ads.replaceAll('ö', 'o');
      aaa = asa.replaceAll('İ', 'I');
      ddd = aaa.replaceAll('Ü', 'U');
    }
    let replaced: string = ddd.replaceAll(' ', '-');
    return replaced;
  }
  headerer: string = '';
  url: string;
  constructor(private service: dataTransfer, private router: ActivatedRoute) {
    this.service.indexUpdated.subscribe((status: number) => { this.int = status; })
    this.service.dataUpdated.subscribe((status: string) => { this.headerer = status; })
  }

  ngOnInit(): void {
    console.log(this.func('İndirimli Kurul'))
  }
}
