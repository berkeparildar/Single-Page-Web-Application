import { Component, Inject, Input, OnInit } from '@angular/core';
import { SlideItemComponent } from '../slide-item/slide-item.component';

@Component({
  selector: 'app-slide-list',
  templateUrl: './slide-list.component.html',
  styleUrls: ['./slide-list.component.css']
})
export class SlideListComponent implements OnInit {
  slideArray: SlideItemComponent[] = [new SlideItemComponent("İZTO Meclisi’nde gündem Güzelbahçe Yerleşkesi", "Yeni yerleşke tanıtıldı. İzmir Ticaret Odası Yönetim Kurulu Başkanı Mahmut Özgener, Haziran Ayı Olağan Meclis toplantısında meclis üyelerine İzmir Ekonomi Üniversitesi Güzelbahçe Yerleşkesi Mimari Proje Yarışmasında birinci olan projeyi anlattı", "assets/materials/carousel/2.jpeg"), new SlideItemComponent("10 Kurum “Atıksız Körfez” İçin İZTO’da Buluştu", "Türkiye’ye örnek olacak ‘Atıksız Körfez Dönüşen Gelecek’ projesi, İzmir’in 10 değerli kurumunu İzmir Ticaret Odası’nda buluşturdu.", "assets/materials/carousel/9.jpeg"), new SlideItemComponent("8 Oda ve Borsadan Ankara ziyareti", "Bakan Muş İzmir iş dünyasının sorunlarını dinledi. Ege Bölgesinde faaliyet gösteren 8 Oda ve Borsa’nın temsilcilerinden oluşan 83 kişilik heyet, TOBB’un 70’inci yıl etkinlikleri için Ankara’yı ziyaret etti.", "assets/materials/carousel/10.jpg"), new SlideItemComponent("Balıkçılar Sorunlarını Masaya Yatırdı", "İzmir’deki Balıkçılık Sektörünün tüm paydaşları, sektörün sorunlarını görüşmek için İzmir Ticaret Odası’nda bir araya geldi", "assets/materials/carousel/3.jpg")];

  url: string = 'menu/pc/duyurular-ve-etkinlikler/';

  adresses = ['izto-meclisinde-gundem-guzelbahce-yerleskesi', 'on-kurum', 'sekiz-oda', 'balikci']

  @Input('index') num: number;
  constructor() {

  }
  ngOnInit(): void {
  }
}
