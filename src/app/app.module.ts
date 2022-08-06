import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SlidesComponent } from './main/slides/slides.component';
import { SlideItemComponent } from './main/slides/slide-item/slide-item.component';
import { SlideListComponent } from './main/slides/slide-list/slide-list.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { PanelContentComponent } from './menu/panel-content/panel-content.component';
import { ButtonPanelComponent } from './main/button-panel/button-panel.component';
import { ImgPanelComponent } from './main/img-panel/img-panel.component';
import { SecondButtonPanelComponent } from './main/second-button-panel/second-button-panel.component';
import { ContactComponent } from './contact/contact.component';
import { KurumsalComponent } from './menu/panel-content/kurumsal/kurumsal.component';
import { EodaComponent } from './menu/panel-content/eoda/eoda.component';
import { UyeComponent } from './menu/panel-content/uye/uye.component';
import { DveComponent } from './menu/panel-content/dve/dve.component';
import { TicaretComponent } from './menu/panel-content/ticaret/ticaret.component';
import { BankComponent } from './menu/panel-content/bank/bank.component';
import { IztotamComponent } from './menu/panel-content/iztotam/iztotam.component';
import { dataTransfer } from './dataTransfer.service';
import { RouterModule, Routes } from '@angular/router';
import { VizyonComponent } from './menu/panel-content/kurumsal/vizyon/vizyon.component';
import { TdypComponent } from './menu/panel-content/kurumsal/tdyp/tdyp.component';
import { OrganizasyonComponent } from './menu/panel-content/kurumsal/organizasyon/organizasyon.component';
import { YonetimComponent } from './menu/panel-content/kurumsal/yonetim/yonetim.component';
import { MeclisComponent } from './menu/panel-content/kurumsal/meclis/meclis.component';
import { DisiplinComponent } from './menu/panel-content/kurumsal/disiplin/disiplin.component';
import { MkuComponent } from './menu/panel-content/kurumsal/mku/mku.component';
import { OschemeComponent } from './menu/panel-content/kurumsal/oscheme/oscheme.component';
import { LogoComponent } from './menu/panel-content/kurumsal/logo/logo.component';
import { OdahesapComponent } from './menu/panel-content/kurumsal/odahesap/odahesap.component';
import { SpcpComponent } from './menu/panel-content/kurumsal/spcp/spcp.component';
import { KardesComponent } from './menu/panel-content/kurumsal/kardes/kardes.component';
import { KvkkComponent } from './menu/panel-content/kurumsal/kvkk/kvkk.component';
import { EtakvimComponent } from './menu/panel-content/kurumsal/etakvim/etakvim.component';
import { OgtComponent } from './menu/panel-content/kurumsal/ogt/ogt.component';
import { KttComponent } from './menu/panel-content/kurumsal/ktt/ktt.component';
import { HrehberComponent } from './menu/panel-content/kurumsal/hrehber/hrehber.component';
import { MkcComponent } from './menu/panel-content/eoda/mkc/mkc.component';
import { EformlarComponent } from './menu/panel-content/eoda/eformlar/eformlar.component';
import { UbgfComponent } from './menu/panel-content/eoda/ubgf/ubgf.component';
import { UmaComponent } from './menu/panel-content/eoda/uma/uma.component';
import { CmaComponent } from './menu/panel-content/eoda/cma/cma.component';
import { MkiComponent } from './menu/panel-content/eoda/mki/mki.component';
import { AstnComponent } from './menu/panel-content/iztotam/astn/astn.component';
import { AcyComponent } from './menu/panel-content/iztotam/acy/acy.component';
import { AkComponent } from './menu/panel-content/iztotam/ak/ak.component';
import { AlComponent } from './menu/panel-content/iztotam/al/al.component';
import { AsasComponent } from './menu/panel-content/iztotam/asas/asas.component';
import { UyelikislemlerComponent } from './menu/panel-content/uye/uyelikislemler/uyelikislemler.component';
import { OubgComponent } from './menu/panel-content/uye/oubg/oubg.component';
import { EfkComponent } from './menu/panel-content/uye/efk/efk.component';
import { FkdComponent } from './menu/panel-content/uye/fkd/fkd.component';
import { OkbComponent } from './menu/panel-content/uye/okb/okb.component';
import { UaComponent } from './menu/panel-content/uye/ua/ua.component';
import { UuComponent } from './menu/panel-content/uye/uu/uu.component';
import { HutComponent } from './menu/panel-content/uye/hut/hut.component';
import { AoComponent } from './menu/panel-content/uye/ao/ao.component';
import { IkComponent } from './menu/panel-content/uye/ik/ik.component';
import { UyelerComponent } from './menu/panel-content/uye/uyeler/uyeler.component';
import { HsComponent } from './menu/panel-content/uye/hs/hs.component';
import { DuyurularComponent } from './menu/panel-content/dve/duyurular/duyurular.component';
import { GdComponent } from './menu/panel-content/dve/gd/gd.component';
import { OdComponent } from './menu/panel-content/dve/od/od.component';
import { FdComponent } from './menu/panel-content/dve/fd/fd.component';
import { DdComponent } from './menu/panel-content/dve/dd/dd.component';
import { TdComponent } from './menu/panel-content/dve/td/td.component';
import { EduComponent } from './menu/panel-content/dve/edu/edu.component';

const allRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'iletisim', component: ContactComponent },
  {
    path: 'menu', component: MenuComponent, children: [
      {
        path: 'pc', component: PanelContentComponent, children:
          [
            {
              path: 'kurumsal', component: KurumsalComponent, data: { header : 'Kurumsal' , index : 0 } ,children: 
              [
                { path: 'vizyonumuz-misyonumuz', component: VizyonComponent, data: { title: 'Vizyonumuz ve Misyonumuz' } },
                { path: 'temel-deger-yonetim', component: TdypComponent, data: { title: 'Temel Değerlerimiz ve Yönetim Politikamız'} },
                { path: 'organizasyon-yapisi', component: OrganizasyonComponent, data: { title: 'Organizasyon Yapısı'} },
                { path: 'yonetim-kurulu', component: YonetimComponent, data: { title: 'Yönetim Kurulu'} },
                { path: 'meclis', component: MeclisComponent, data: { title: 'Meclis'} },
                { path: 'disiplin', component: DisiplinComponent, data: { title: 'Disiplin Kurulu'} },
                { path: 'organizasyon-semasi', component: OschemeComponent, data: { title: 'Organizasyon Şeması'} },
                { path: 'logo', component: LogoComponent, data: { title: 'Logo ve Kurumsal Kimlik'} },
                { path: 'oda-hesap', component: OdahesapComponent, data: { title: 'Oda Hesapları'} },
                { path: 'stratejik-plan', component: SpcpComponent, data: { title: 'Stratejik Planlar ve Çalışma Programları'} },
                { path: 'kardes-odalar', component: KardesComponent, data: { title: 'Kardeş Odalar'} },
                { path: 'kvkk', component: KvkkComponent, data: { title: 'KVKK'} },
                { path: 'etkinlik-takvimi', component: EtakvimComponent, data: { title: 'Etkinlik Takvimi'} },
                { path: 'ozel-gun-takvimi', component: OgtComponent, data: { title: 'Özel Gün ve Haftalar Takvimi'} },
                { path: 'komite-takvimi', component: KttComponent, data: { title: 'Komite Toplantı Takvimi'} },
                { path: 'hizmet-rehberi', component: HrehberComponent, data: { title: 'Hizmet Rehberi'} }
              ]
            },
            {
              path: 'eoda', component: EodaComponent, data: { header : 'E-Oda', index : 1}, children:
              [
                {path: 'meslek-komite', component: MkcComponent, data: {title : 'Meslek Komitesi Çalışmaları'}},
                {path: 'eformlar', component: EformlarComponent, data: {title : 'E-Formlar'}},
                {path: 'uye-bilgi-guncelleme', component: UbgfComponent, data: {title : 'Üye Bilgi Güncelleme Formu'}},
                {path: 'asd', component: UmaComponent, data: {title : 'Üye Memnuniyet Anketi'}},
                {path: 'cagri-memnuniyet', component: CmaComponent, data: {title : 'Çağrı Merkezi Memnuniyeti Anketi'}},
                {path: 'meslek-komite-iletisim-formu', component: MkiComponent, data: {title : 'Meslek Komiteleri İletişim Formu'}}
              ]
            },
            {
              path: 'iztotam', component: IztotamComponent, data: { header: 'IZTOTAM', index: 7}, children:
              [
                {path: 'arabuluculuk-sureci', component: AstnComponent, data: { title: 'Arabuluculuk Sürecinin Temel Nitelikleri'} },
                {path: 'alternatif-cozum-yollari', component: AcyComponent, data: { title: 'Alternatif Çözüm Yolları'}},
                {path: 'arabuluculuk-kurallari', component: AkComponent, data: { title: 'Arabuluculuk Kuralları'}},
                {path: 'arabulucu-listesi', component: AlComponent, data: { title: 'Atabulucu Listesi'}},
                {path: 'arabuluculuk-akis-semasi',component: AsasComponent, data: {title: 'Arabuluculuk Süreci Akış Şeması'}}
              ]
            },
            {
              path: 'uye-uyeler', component: UyeComponent, data: { header: 'Üyelik ve Üyeler', index: 2}, children:[
                {path: 'uyelik-islemleri', component: UyelikislemlerComponent, data: { title: 'Üyelik İşlemleri'} },
                {path: 'online-uye-bilgi-guncelleme', component: OubgComponent, data: { title: 'Online Üye Bilgi Güncelleme'}},
                {path: 'ek-faaliyet-kodu-dilekce', component: EfkComponent, data: { title: 'Ek Faaliyet Kodu Talebi Dilekçesi'}},
                {path: 'faaliyet-kodu-degisiklik', component: FkdComponent, data: { title: 'Faaliyet Kodu Değişiklik Talebi Dilekçesi'}},
                {path: 'oda-kayit-beyanname',component: OkbComponent, data: {title: 'Oda Kayıt Beyannameleri'}},
                {path: 'uyelik-avantajlari', component: UaComponent, data: { title: 'Üyelik Avantajları'}},
                {path: 'uyelik-ucretleri', component: UuComponent, data: { title: 'Üyelik Ücretleri'}},
                {path: '2022-hizmet-tarifesi',component: HutComponent, data: {title: '2022 Hizmet Ücretleri Tarifesi'}},
                {path: 'aidat-odemeleri', component: AoComponent, data: { title: 'Aidat Ödemeleri'}},
                {path: 'indirimli-kuruluslar', component: IkComponent, data: { title: 'İndirimli Kuruluşlar'}},
                {path: 'uyeler', component: UyelerComponent, data: { title: 'Üyeler'}},
                {path: 'hizmet-standart', component: HsComponent, data: { title: 'İZTO Hizmet Standartları'}},
              ]
            },
            {
              path: 'duyurular-egitim', component: DveComponent, data: { header: 'Duyurular ve Etkinlikler' , index: 3}, children: [
                {path: 'duyurular', component: DuyurularComponent, data: { title: 'Duyurular'} },
                {path: 'genel-duyurular', component: GdComponent, data: { title: 'Genel Duyurular'}},
                {path: 'oda-duyurulari', component: OdComponent, data: { title: 'Oda Duyuruları'}},
                {path: 'fuar-duyurulari', component: FdComponent, data: { title: 'Fuar Duyuruları'}},
                {path: 'dis-ticaret-duyurulari',component: DdComponent, data: {title: 'Dış Ticaret Duyuruları'}},
                {path: 'ticaret-sicil-duyurulari', component: TdComponent, data: { title: 'Ticaret Sicil Duyuruları'}},
                {path: 'egitimler', component: EduComponent, data: { title: 'Eğitimler'}},
              ]
            }
          ]
      }
    ]
  },

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SlidesComponent,
    SlideItemComponent,
    SlideListComponent,
    MainComponent,
    SlidesComponent,
    FooterComponent,
    MenuComponent,
    MenuListComponent,
    PanelContentComponent,
    ButtonPanelComponent,
    ImgPanelComponent,
    SecondButtonPanelComponent,
    ContactComponent,
    KurumsalComponent,
    EodaComponent,
    UyeComponent,
    DveComponent,
    TicaretComponent,
    BankComponent,
    IztotamComponent,
    VizyonComponent,
    TdypComponent,
    OrganizasyonComponent,
    YonetimComponent,
    MeclisComponent,
    DisiplinComponent,
    MkuComponent,
    OschemeComponent,
    LogoComponent,
    OdahesapComponent,
    SpcpComponent,
    KardesComponent,
    KvkkComponent,
    EtakvimComponent,
    OgtComponent,
    KttComponent,
    HrehberComponent,
    UmaComponent,
    MkiComponent,
    AstnComponent,
    UyelikislemlerComponent,
    OubgComponent,
    EfkComponent,
    FkdComponent,
    OkbComponent,
    UaComponent,
    UuComponent,
    HutComponent,
    AoComponent,
    IkComponent,
    UyelerComponent,
    HsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allRoutes)
  ],
  providers: [dataTransfer],
  bootstrap: [AppComponent]
})
export class AppModule { }
