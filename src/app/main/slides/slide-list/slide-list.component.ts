import { Component, Inject, Input, OnInit } from '@angular/core';
import { SlideItemComponent } from '../slide-item/slide-item.component';

@Component({
  selector: 'app-slide-list',
  templateUrl: './slide-list.component.html',
  styleUrls: ['./slide-list.component.css']
})
export class SlideListComponent implements OnInit {
  slideArray: SlideItemComponent[] = [new SlideItemComponent("İZTO Meclisi’nde gündem Güzelbahçe Yerleşkesi", "Yeni yerleşke tanıtıldı. İzmir Ticaret Odası Yönetim Kurulu Başkanı Mahmut Özgener, Haziran Ayı Olağan Meclis toplantısında meclis üyelerine İzmir Ekonomi Üniversitesi Güzelbahçe Yerleşkesi Mimari Proje Yarışmasında birinci olan projeyi anlattı", "https://api.izto.org.tr/storage/HomePageSlider/thumb/I57BgdKLKNyfsAVJ.jpeg"), new SlideItemComponent("10 Kurum “Atıksız Körfez” İçin İZTO’da Buluştu", "Türkiye’ye örnek olacak ‘Atıksız Körfez Dönüşen Gelecek’ projesi, İzmir’in 10 değerli kurumunu İzmir Ticaret Odası’nda buluşturdu.", "https://api.izto.org.tr/storage/HomePageSlider/thumb/DA3oIqHLZr2aF1Ei.jpeg"), new SlideItemComponent("8 Oda ve Borsadan Ankara ziyareti", "Bakan Muş İzmir iş dünyasının sorunlarını dinledi. Ege Bölgesinde faaliyet gösteren 8 Oda ve Borsa’nın temsilcilerinden oluşan 83 kişilik heyet, TOBB’un 70’inci yıl etkinlikleri için Ankara’yı ziyaret etti.", "https://api.izto.org.tr/storage/HomePageSlider/thumb/eLq0CsxUZT2WdsDp.JPG"), new SlideItemComponent("Balıkçılar Sorunlarını Masaya Yatırdı", "İzmir’deki Balıkçılık Sektörünün tüm paydaşları, sektörün sorunlarını görüşmek için İzmir Ticaret Odası’nda bir araya geldi", "https://api.izto.org.tr/storage/HomePageSlider/thumb/SLZq1KreEMzfvbou.JPG"), new SlideItemComponent("İzq’da Örnek İş Birliğ", "İzmir’in uluslararası inovasyon ve girişimcilik kentine dönüşmesini sağlamak hedefiyle kurulan ‘İzQ Girişimcilik ve İnovasyon Merkezi’, ilk filizini verdi.", "https://api.izto.org.tr/storage/HomePageSlider/thumb/xo3EXBYUlHj6Peaq.jpg"), new SlideItemComponent("İZTO’da ‘Hukuk’ Zirvesi", "İzmir Ticaret Odası (İZTO) ve İzmir Ekonomi Üniversitesi (İEÜ), Türkiye’nin önde gelen hukukçularını ‘Ticaret Sicili ve Şirketler Hukukuna Etkileri’ konulu sempozyumda bir araya getirdi.", "https://api.izto.org.tr/storage/HomePageSlider/thumb/tjUEIcNPxxkH4pFh.jpeg"), new SlideItemComponent("32 Kooperatif İZTO’da Buluştu", "İzmir’de faaliyetlerini sürdüren 32 kooperatif, mevzuattaki değişiklikleri ve sektördeki sorunları görüşmek için İzmir Ticaret Odası ev sahipliğinde bir araya geldi.", "https://api.izto.org.tr/storage/HomePageSlider/thumb/jZ4rzkfDoLK7yG4Y.jpeg")];
  @Input('index') num: number;
  constructor() {

  }
  ngOnInit(): void {
  }
}
