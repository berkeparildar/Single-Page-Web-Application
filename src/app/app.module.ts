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
import { IdoComponent } from './menu/panel-content/ticaret/ido/ido.component';
import { GirisimcilikComponent } from './menu/panel-content/ticaret/girisimcilik/girisimcilik.component';
import { VizeComponent } from './menu/panel-content/ticaret/vize/vize.component';
import { FuarComponent } from './menu/panel-content/ticaret/fuar/fuar.component';
import { FzoComponent } from './menu/panel-content/bank/fzo/fzo.component';
import { IflComponent } from './menu/panel-content/bank/ifl/ifl.component';
import { TitComponent } from './menu/panel-content/bank/tit/tit.component';
import { UvubComponent } from './menu/panel-content/bank/uvub/uvub.component';
import { IhalelerComponent } from './menu/panel-content/ihaleler/ihaleler.component';
import { IztoiComponent } from './menu/panel-content/ihaleler/iztoi/iztoi.component';
import { IztoesComponent } from './menu/panel-content/ihaleler/iztoes/iztoes.component';
import { IzqiComponent } from './menu/panel-content/ihaleler/izqi/izqi.component';
import { IeuiComponent } from './menu/panel-content/ihaleler/ieui/ieui.component';
import { IiComponent } from './menu/panel-content/ihaleler/ii/ii.component';
import { CovidComponent } from './menu/panel-content/bank/covid/covid.component';
import { RaporlarComponent } from './menu/panel-content/bank/raporlar/raporlar.component';
import { AbComponent } from './menu/panel-content/bank/ab/ab.component';
import { KentselrComponent } from './menu/panel-content/bank/kentselr/kentselr.component';
import { SektorelComponent } from './menu/panel-content/bank/sektorel/sektorel.component';
import { UlrComponent } from './menu/panel-content/bank/ulr/ulr.component';
import { DtdsComponent } from './menu/panel-content/bank/dtds/dtds.component';
import { FuarraportlariComponent } from './menu/panel-content/bank/fuarraportlari/fuarraportlari.component';
import { OsrComponent } from './menu/panel-content/bank/osr/osr.component';
import { DexComponent } from './menu/panel-content/dve/dex/dex.component';
import { GemilerComponent } from './menu/panel-content/dve/gemiler/gemiler.component';
import { DextwoComponent } from './menu/panel-content/dve/dextwo/dextwo.component';
import { DexthreeComponent } from './menu/panel-content/dve/dexthree/dexthree.component';
import { DexfourComponent } from './menu/panel-content/dve/dexfour/dexfour.component';
import { TsrComponent } from './menu/panel-content/bank/tsr/tsr.component';
import { YtmComponent } from './menu/panel-content/bank/ytm/ytm.component';
import { GdanismanComponent } from './menu/panel-content/bank/gdanisman/gdanisman.component';
import { KturizmComponent } from './menu/panel-content/bank/kturizm/kturizm.component';

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
                { path: 'vizyonumuz-ve-misyonumuz', component: VizyonComponent, data: { title: 'Vizyonumuz ve Misyonumuz' } },
                { path: 'temel-degerlerimiz-ve-yonetim-politikamiz', component: TdypComponent, data: { title: 'Temel Değerlerimiz ve Yönetim Politikamız'} },
                { path: 'organizasyon-yapisi', component: OrganizasyonComponent, data: { title: 'Organizasyon Yapısı'} },
                { path: 'yonetim-kurulu', component: YonetimComponent, data: { title: 'Yönetim Kurulu'} },
                { path: 'meclis', component: MeclisComponent, data: { title: 'Meclis'} },
                { path: 'disiplin-kurulu', component: DisiplinComponent, data: { title: 'Disiplin Kurulu'} },
                { path: 'organizasyon-semasi', component: OschemeComponent, data: { title: 'Organizasyon Şeması'} },
                { path: 'logo-ve-kurumsal-kimlik', component: LogoComponent, data: { title: 'Logo ve Kurumsal Kimlik'} },
                { path: 'oda-hesaplari', component: OdahesapComponent, data: { title: 'Oda Hesapları'} },
                { path: 'stratejik-planlar-ve-calisma-programlari', component: SpcpComponent, data: { title: 'Stratejik Planlar ve Çalışma Programları'} },
                { path: 'kardes-odalar', component: KardesComponent, data: { title: 'Kardeş Odalar'} },
                { path: 'kvkk', component: KvkkComponent, data: { title: 'KVKK'} },
                { path: 'etkinlik-takvimi', component: EtakvimComponent, data: { title: 'Etkinlik Takvimi'} },
                { path: 'ozel-gun-ve-haftalar-takvimi', component: OgtComponent, data: { title: 'Özel Gün ve Haftalar Takvimi'} },
                { path: 'komite-toplanti-takvimi', component: KttComponent, data: { title: 'Komite Toplantı Takvimi'} },
                { path: 'hizmet-rehberi', component: HrehberComponent, data: { title: 'Hizmet Rehberi'} }
              ]
            },
            {
              path: 'e-oda', component: EodaComponent, data: { header : 'E-Oda', index : 1}, children:
              [
                {path: 'meslek-komitesi-calismalari', component: MkcComponent, data: {title : 'Meslek Komitesi Çalışmaları'}},
                {path: 'e-formlar', component: EformlarComponent, data: {title : 'E-Formlar'}},
                {path: 'uye-bilgi-guncelleme-formu', component: UbgfComponent, data: {title : 'Üye Bilgi Güncelleme Formu'}},
                {path: 'uye-memnuniyet-anketi', component: UmaComponent, data: {title : 'Üye Memnuniyet Anketi'}},
                {path: 'cagri-merkezi-memnuniyeti-anketi', component: CmaComponent, data: {title : 'Çağrı Merkezi Memnuniyeti Anketi'}},
                {path: 'meslek-komiteleri-iletisim-formu', component: MkiComponent, data: {title : 'Meslek Komiteleri Iletişim Formu'}}
              ]
            },
            {
              path: 'iztotam', component: IztotamComponent, data: { header: 'IZTOTAM', index: 7}, children:
              [
                {path: 'arabuluculuk-surecinin-temel-nitelikleri', component: AstnComponent, data: { title: 'Arabuluculuk Sürecinin Temel Nitelikleri'} },
                {path: 'alternatif-cozum-yollari', component: AcyComponent, data: { title: 'Alternatif Çözüm Yolları'}},
                {path: 'arabuluculuk-kurallari', component: AkComponent, data: { title: 'Arabuluculuk Kuralları'}},
                {path: 'arabulucu-listesi', component: AlComponent, data: { title: 'Arabulucu Listesi'}},
                {path: 'arabuluculuk-sureci-akis-semasi',component: AsasComponent, data: {title: 'Arabuluculuk Süreci Akış Şeması'}}
              ]
            },
            {
              path: 'uyelik-ve-uyeler', component: UyeComponent, data: { header: 'Üyelik ve Üyeler', index: 2}, children:[
                {path: 'uyelik-islemleri', component: UyelikislemlerComponent, data: { title: 'Üyelik İşlemleri'} },
                {path: 'online-uye-bilgi-guncelleme', component: OubgComponent, data: { title: 'Online Üye Bilgi Güncelleme'}},
                {path: 'ek-faaliyet-kodu-talebi-dilekcesi', component: EfkComponent, data: { title: 'Ek Faaliyet Kodu Talebi Dilekçesi'}},
                {path: 'faaliyet-kodu-degisiklik-talebi-dilekcesi', component: FkdComponent, data: { title: 'Faaliyet Kodu Değişiklik Talebi Dilekçesi'}},
                {path: 'oda-kayit-beyannameleri',component: OkbComponent, data: {title: 'Oda Kayıt Beyannameleri'}},
                {path: 'uyelik-avantajlari', component: UaComponent, data: { title: 'Üyelik Avantajları'}},
                {path: 'uyelik-ucretleri', component: UuComponent, data: { title: 'Üyelik Ücretleri'}},
                {path: '2022-hizmet-ucretleri-tarifesi',component: HutComponent, data: {title: '2022 Hizmet Ücretleri Tarifesi'}},
                {path: 'aidat-odemeleri', component: AoComponent, data: { title: 'Aidat Ödemeleri'}},
                {path: 'indirimli-kuruluslar', component: IkComponent, data: { title: 'İndirimli Kuruluşlar'}},
                {path: 'uyeler', component: UyelerComponent, data: { title: 'Üyeler'}},
                {path: 'izto-hizmet-standartlari', component: HsComponent, data: { title: 'İZTO Hizmet Standartları'}},
              ]
            },
            {
              path: 'duyurular-ve-etkinlikler', component: DveComponent, data: { header: 'Duyurular ve Etkinlikler' , index: 3}, children: [
                {path: 'duyurular', component: DuyurularComponent, data: { title: 'Duyurular'} },
                {path: 'genel-duyurular', component: GdComponent, data: { title: 'Genel Duyurular'}},
                {path: 'oda-duyurulari', component: OdComponent, data: { title: 'Oda Duyuruları'}},
                {path: 'fuar-duyurulari', component: FdComponent, data: { title: 'Fuar Duyuruları'}},
                {path: 'dis-ticaret-duyurulari',component: DdComponent, data: {title: 'Dış Ticaret Duyuruları'}},
                {path: 'ticaret-sicil-duyurulari', component: TdComponent, data: { title: 'Ticaret Sicil Duyuruları'}},
                {path: 'egitimler', component: FuarComponent, data: { title: 'Eğitimler'}},
                {path: 'izqda-toplantı-ve-etkinliklerinize-prestij-katın', component: DexComponent, data: { title: 'İZQda Toplantı ve Etkinliklerinize Prestij Katın'}},
                {path: '2022-yilinda-izmir-limanına-gelecek-olan-kruvaziyer-gemileri', component: GemilerComponent, data: { title: '2022 Yılında İzmir Limanına Gelecek Olan Kruvaziyer Gemileri'}},
                {path: 'vergi-mükellefiyet-durumu-kontrolu', component: DextwoComponent, data: { title: 'Vergi Mükellefiyet Durumu Kontrolü'}},
                {path: 'odamıza-gelmeden-oda-kayıt-isleminizi-elektronik-imza-ile-gerceklestirebilirsiniz', component: DexthreeComponent, data: { title: 'Odamıza Gelmeden, Oda Kayıt İşleminizi Elektronik İmza (E-İmza) İle Gerçekleştirebilirsiniz'}},
                {path: 'mersis', component: DexfourComponent, data: { title: '01.03.2022 Tarihinden İtibaren Mersis Üzerinde Yapılacak Atama Ve Kuruluş Başvurularında E-İmza Uygulaması Başlıyor'}},
                
              ]
            },
            {
              path: 'ticaret-noktasi', component: TicaretComponent, data: { header: 'Ticaret Noktasi' , index: 5}, children: [
                {path: 'ihracat-destek-ofisi', component: IdoComponent, data: { title: 'İhracat Destek Ofisi'} },
                {path: 'girisimcilik', component: GirisimcilikComponent, data: { title: 'Girişimcilik'}},
                {path: 'vize-hizmetleri', component: VizeComponent, data: { title: 'Vize Hizmetleri'}},
                {path: 'fuarlar', component: FuarComponent, data: { title: 'Fuarlar'}},
              ]
            },
            {
              path: 'bilgi-bankasi', component: BankComponent, data: { header: 'Bilgi Bankasi' , index: 6}, children: [
                {path: 'fire-ve-zaiyat-oranlari', component: FzoComponent, data: { title: 'Fire ve Zayiat Oranları'} },
                {path: 'izmir-ticaret-odasi-ihracatci-firmalar-listesi', component: IflComponent, data: { title: 'İzmir Ticaret Odası İhracatçı Firmalar Listesi'}},
                {path: 'ticari-isletme-tanimlari', component: TitComponent, data: { title: 'Ticari İşletme Tanımları'}},
                {path: 'ulusal-ve-uluslararasi-baglantilar', component: UvubComponent, data: { title: 'Ulusal ve Uluslararası Bağlantılar'}},
                {path: 'covid', component: CovidComponent, data: { title: ''}},
                {path: 'raporlar', component: RaporlarComponent, data: { title: 'Raporlar'}},
                {path: 'ab-raporlari', component: AbComponent, data: { title: 'AB Raporları'}},
                {path: 'kentsel-raporlar', component: KentselrComponent, data: { title: 'Kentsel Raporlar'}},
                {path: 'sektorel-raporlar', component: SektorelComponent, data: { title: 'Sektörel Raporlar'}},
                {path: 'ulke-raporlari', component: UlrComponent, data: { title: 'Ülke Raporları'}},
                {path: 'devlet-tesvikleri-dosyasi', component: DtdsComponent, data: { title: 'Devlet Teşvikleri Dosyası'}},
                {path: 'fuar-raporlari', component: FuarraportlariComponent, data: { title: 'Fuar Raporları'}},
                {path: 'oda-sicili-rehberi', component: OsrComponent, data: { title: 'Oda Sicili Rehberi'}},
                {path: 'yenisehir-ticaret-merkezi', component: YtmComponent, data: { title: 'Yenişehir Ticaret Merkezi'}},
                {path: 'gayrimenkul-danismanligi', component: GdanismanComponent, data: { title: 'Gayrimenkul Danışmanlığı'}},
                {path: 'kruvaziyer-turizmi', component: KturizmComponent, data: { title: 'Kruvaziyer Turizmi'}},
              ]
            },
            {
              path: 'ihalelerimiz', component: BankComponent, data: { header: 'İhalelerimiz' , index: 4}, children: [
                {path: 'izmir-ticaret-odasi-ihalelerimiz', component: IztoiComponent, data: { title: 'İzmir Ticaret Odası İhaleleri'} },
                {path: 'izq-ihaleleri', component: IzqiComponent, data: { title: 'İZQ İhaleleri'}},
                {path: 'izto-egitim-ve-saglik-vakfi-ihaleleri', component: IztoesComponent, data: { title: 'İZTO Eğitim ve Sağlık Vakfi İhaleleri'}},
                {path: 'izfas-ihaleleri', component: IiComponent, data: { title: 'İZFAŞ İhaleleri'}},
                {path: 'izmir-ekonomi-universitesi-ihaleleri', component: IeuiComponent, data: { title: 'İzmir Ekonomi Üniversitesi İhaleleri'}},
              ]
            },
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
    HsComponent,
    IdoComponent,
    GirisimcilikComponent,
    VizeComponent,
    FuarComponent,
    FzoComponent,
    IflComponent,
    TitComponent,
    UvubComponent,
    IhalelerComponent,
    IztoiComponent,
    IztoesComponent,
    IzqiComponent,
    IeuiComponent,
    IiComponent,
    CovidComponent,
    RaporlarComponent,
    AbComponent,
    KentselrComponent,
    SektorelComponent,
    UlrComponent,
    DtdsComponent,
    FuarraportlariComponent,
    OsrComponent,
    DexComponent,
    GemilerComponent,
    DextwoComponent,
    DexthreeComponent,
    DexfourComponent,
    TsrComponent,
    YtmComponent,
    KturizmComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allRoutes, {scrollPositionRestoration: 'enabled'})
  ],
  providers: [dataTransfer],
  bootstrap: [AppComponent]
})
export class AppModule { }
