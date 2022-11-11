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
import { ContactComponent } from './contact/contact.component';
import { KurumsalComponent } from './menu/panel-content/kurumsal/kurumsal.component';
import { EodaComponent } from './menu/panel-content/e_oda/eoda.component';
import { UyeComponent } from './menu/panel-content/uye/uye.component';
import { DveComponent } from './menu/panel-content/duyuru_etkinlikler/dve.component';
import { TicaretComponent } from './menu/panel-content/ticaret-noktasi/ticaret.component';
import { BankComponent } from './menu/panel-content/bilgibankasi/bank.component';
import { IztotamComponent } from './menu/panel-content/iztotam/iztotam.component';
import { dataTransfer } from './dataTransfer.service';
import { RouterModule, Routes } from '@angular/router';
import { VizyonComponent } from './menu/panel-content/kurumsal/vizyon_misyon/vizyon.component';
import { TdypComponent } from './menu/panel-content/kurumsal/temel_degerler/tdyp.component';
import { OrganizasyonComponent } from './menu/panel-content/kurumsal/organizasyon_yapisi/organizasyon.component';
import { YonetimComponent } from './menu/panel-content/kurumsal/yonetim_kurulu/yonetim.component';
import { MeclisComponent } from './menu/panel-content/kurumsal/meclis/meclis.component';
import { DisiplinComponent } from './menu/panel-content/kurumsal/disiplin_kurulu/disiplin.component';
import { OschemeComponent } from './menu/panel-content/kurumsal/organizasyon_semasi/oscheme.component';
import { LogoComponent } from './menu/panel-content/kurumsal/logo_kurumsal_kimlik/logo.component';
import { OdahesapComponent } from './menu/panel-content/kurumsal/oda_hesaplari/odahesap.component';
import { SpcpComponent } from './menu/panel-content/kurumsal/stratejik_planlar/spcp.component';
import { KardesComponent } from './menu/panel-content/kurumsal/kardes_odalar/kardes.component';
import { KvkkComponent } from './menu/panel-content/kurumsal/kvkk/kvkk.component';
import { EtakvimComponent } from './menu/panel-content/kurumsal/etkinlik_takvimi/etakvim.component';
import { OgtComponent } from './menu/panel-content/kurumsal/ozel_gun_haftalar/ogt.component';
import { KttComponent } from './menu/panel-content/kurumsal/komite_toplanti_takvimi/ktt.component';
import { HrehberComponent } from './menu/panel-content/kurumsal/hizmet_rehberi/hrehber.component';
import { MkcComponent } from './menu/panel-content/e_oda/meslek_komitesi_calismalari/mkc.component';
import { EformlarComponent } from './menu/panel-content/e_oda/e_formlar/eformlar.component';
import { UbgfComponent } from './menu/panel-content/e_oda/uye_bilgi_guncelleme_formu/ubgf.component';
import { UmaComponent } from './menu/panel-content/e_oda/uye_memnuniyeti_anketi/uma.component';
import { CmaComponent } from './menu/panel-content/e_oda/cagri_merkezi_anketi/cma.component';
import { MkiComponent } from './menu/panel-content/e_oda/meslek_komitesi_iletisim/mki.component';
import { AstnComponent } from './menu/panel-content/iztotam/arabulucu_temel_nitelik/astn.component';
import { AcyComponent } from './menu/panel-content/iztotam/arabulucu_cozum_yollari/acy.component';
import { AkComponent } from './menu/panel-content/iztotam/arabuluculuk_kurallari/ak.component';
import { AlComponent } from './menu/panel-content/iztotam/arabulucu_listesi/al.component';
import { AsasComponent } from './menu/panel-content/iztotam/arabulucu_sureci/asas.component';
import { UyelikislemlerComponent } from './menu/panel-content/uye/uyelik_islemleri/uyelikislemler.component';
import { OubgComponent } from './menu/panel-content/uye/online_uye_bilgi_guncelleme/oubg.component';
import { EfkComponent } from './menu/panel-content/uye/ek_faaliyet_kodu/efk.component';
import { FkdComponent } from './menu/panel-content/uye/faaliyet_kodu_değisiklik/fkd.component';
import { OkbComponent } from './menu/panel-content/uye/oda_kayit_beyannameleri/okb.component';
import { UaComponent } from './menu/panel-content/uye/uyelik_avantajları/ua.component';
import { UuComponent } from './menu/panel-content/uye/uyelik_ucretleri/uu.component';
import { HutComponent } from './menu/panel-content/uye/hizmet_ucretleri_tarifesi/hut.component';
import { AoComponent } from './menu/panel-content/uye/aidat_odeme/ao.component';
import { IkComponent } from './menu/panel-content/uye/indirimli_kuruluslar/ik.component';
import { UyelerComponent } from './menu/panel-content/uye/uyeler/uyeler.component';
import { HsComponent } from './menu/panel-content/uye/hizmet_standartlari/hs.component';
import { DuyurularComponent } from './menu/panel-content/duyuru_etkinlikler/duyurular/duyurular.component';
import { GdComponent } from './menu/panel-content/duyuru_etkinlikler/genel/gd.component';
import { OdComponent } from './menu/panel-content/duyuru_etkinlikler/oda/od.component';
import { FdComponent } from './menu/panel-content/duyuru_etkinlikler/fuar/fd.component';
import { DdComponent } from './menu/panel-content/duyuru_etkinlikler/dis_ticaret/dd.component';
import { TdComponent } from './menu/panel-content/duyuru_etkinlikler/ticaret_sicil/td.component';
import { EduComponent } from './menu/panel-content/duyuru_etkinlikler/egitimler/edu.component';
import { IdoComponent } from './menu/panel-content/ticaret-noktasi/ido/ido.component';
import { GirisimcilikComponent } from './menu/panel-content/ticaret-noktasi/girisimcilik/girisimcilik.component';
import { VizeComponent } from './menu/panel-content/ticaret-noktasi/vize/vize.component';
import { FuarComponent } from './menu/panel-content/ticaret-noktasi/fuar/fuar.component';
import { FzoComponent } from './menu/panel-content/bilgibankasi/fire_zaiyat_oranlari/fzo.component';
import { IflComponent } from './menu/panel-content/bilgibankasi/izto_ihracatci_firmalar/ifl.component';
import { TitComponent } from './menu/panel-content/bilgibankasi/ticari_isletme_tanimları/tit.component';
import { UvubComponent } from './menu/panel-content/bilgibankasi/ulusal_uluslararasi_baglantilar/uvub.component';
import { IhalelerComponent } from './menu/panel-content/ihaleler/ihaleler.component';
import { IztoiComponent } from './menu/panel-content/ihaleler/izto_ihale/iztoi.component';
import { IztoesComponent } from './menu/panel-content/ihaleler/izto_egitim_saglik/iztoes.component';
import { IzqiComponent } from './menu/panel-content/ihaleler/izq_ihaleleri/izqi.component';
import { IeuiComponent } from './menu/panel-content/ihaleler/ieu_ihale/ieui.component';
import { IiComponent } from './menu/panel-content/ihaleler/izfas_ihale/ii.component';
import { CovidComponent } from './menu/panel-content/bilgibankasi/covid/covid.component';
import { RaporlarComponent } from './menu/panel-content/bilgibankasi/raporlar/raporlar.component';
import { AbComponent } from './menu/panel-content/bilgibankasi/ab_raporlari/ab.component';
import { KentselrComponent } from './menu/panel-content/bilgibankasi/kentsel_raporlar/kentselr.component';
import { SektorelComponent } from './menu/panel-content/bilgibankasi/sektorel_raporlar/sektorel.component';
import { UlrComponent } from './menu/panel-content/bilgibankasi/ulke_raporlari/ulr.component';
import { DtdsComponent } from './menu/panel-content/bilgibankasi/devlet_tesvikleri_dosyasi/dtds.component';
import { FuarraportlariComponent } from './menu/panel-content/bilgibankasi/fuar_raporlari/fuarraportlari.component';
import { OsrComponent } from './menu/panel-content/bilgibankasi/oda_sicili_rehberi/osr.component';
import { DexComponent } from './menu/panel-content/duyuru_etkinlikler/duyuru_bir/dex.component';
import { GemilerComponent } from './menu/panel-content/duyuru_etkinlikler/gemiler/gemiler.component';
import { DextwoComponent } from './menu/panel-content/duyuru_etkinlikler/duyuru_iki/dextwo.component';
import { DexthreeComponent } from './menu/panel-content/duyuru_etkinlikler/duyuru_uc/dexthree.component';
import { DexfourComponent } from './menu/panel-content/duyuru_etkinlikler/duyuru_dort/dexfour.component';
import { YtmComponent } from './menu/panel-content/bilgibankasi/yenisehir_ticaret_merkezi/ytm.component';
import { GdanismanComponent } from './menu/panel-content/bilgibankasi/gayrimenkul_danismanligi/gdanisman.component';
import { KturizmComponent } from './menu/panel-content/bilgibankasi/kruvaziyer_turizmi/kturizm.component';
import { IdestekoComponent } from './menu/panel-content/bilgibankasi/karar_ornekleri/idesteko.component';
import { TibelgelerComponent } from './menu/panel-content/bilgibankasi/tescilde_istenen_belgeler/tibelgeler.component';
import { BfoComponent } from './menu/panel-content/bilgibankasi/belge_form_ornek/bfo.component';
import { MersispComponent } from './menu/panel-content/bilgibankasi/mersis_projesi/mersisp.component';
import { GenelbilComponent } from './menu/panel-content/bilgibankasi/genel_bilgiler/genelbil.component';
import { EvraklistComponent } from './menu/panel-content/bilgibankasi/evrak_kontrol_listesi/evraklist.component';
import { TsrehberComponent } from './menu/panel-content/bilgibankasi/ticaret_sicili_rehberi/tsrehber.component';
import { AntrepoComponent } from './menu/panel-content/bilgibankasi/antrepo_belgesi/antrepo.component';
import { AtakarnesiComponent } from './menu/panel-content/bilgibankasi/ata_karnesi/atakarnesi.component';
import { AftarifeComponent } from './menu/panel-content/bilgibankasi/azami_fiyat_tarifesi/aftarife.component';
import { BilirkisiComponent } from './menu/panel-content/bilgibankasi/bilirkisi/bilirkisi.component';
import { EkspertizrComponent } from './menu/panel-content/bilgibankasi/ekspertiz_raporu/ekspertizr.component';
import { FaydalimbComponent } from './menu/panel-content/bilgibankasi/faydali_model_belgesi/faydalimb.component';
import { FtbelgesiComponent } from './menu/panel-content/bilgibankasi/fiili_tuketim_belgesi/ftbelgesi.component';
import { YetkilitbComponent } from './menu/panel-content/bilgibankasi/yetkili_temsilcilik_belgesi/yetkilitb.component';
import { YmalibComponent } from './menu/panel-content/bilgibankasi/yerli_mali_belgesi/ymalib.component';
import { TmalibelgesiComponent } from './menu/panel-content/bilgibankasi/turk_mali_belgesi/tmalibelgesi.component';
import { TobbslkComponent } from './menu/panel-content/bilgibankasi/tobb_sigorta_levhaya_kayit/tobbslk.component';
import { TiisrehComponent } from './menu/panel-content/bilgibankasi/ticaret_islemler_rehberi/tiisreh.component';
import { HukukComponent } from './menu/panel-content/bilgibankasi/hukuk_sayfasi/hukuk.component';
import { SssComponent } from './menu/panel-content/bilgibankasi/sikca_sorulan_sorular/sss.component';
import { TkbfComponent } from './menu/panel-content/e_oda/ticari_kazanc_beyan_formu/tkbf.component';
import { SikaoneComponent } from './menu/panel-content/e_oda/izto_sikayet_oneri/sikaone.component';
import { BebComponent } from './menu/panel-content/e_oda/bilgi_edinme_birimi/beb.component';
import { GkibefComponent } from './menu/panel-content/e_oda/gercek_kisiler/gkibef.component';
import { TkibefComponent } from './menu/panel-content/e_oda/tuzel_kisiler/tkibef.component';
import { DexsixComponent } from './menu/panel-content/duyuru_etkinlikler/duyuru_bes/dexsix.component';
import { DexsevenComponent } from './menu/panel-content/duyuru_etkinlikler/duyuru_alti/dexseven.component';


const allRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'iletisim', component: ContactComponent },
  {
    path: 'menu', component: MenuComponent, children: [
      {
        path: 'pc', component: PanelContentComponent, children:
          [
            {
              path: 'kurumsal', component: KurumsalComponent, data: { header: 'Kurumsal', index: 0 }, children:
                [
                  { path: 'vizyonumuz-ve-misyonumuz', component: VizyonComponent, data: { title: 'Vizyonumuz ve Misyonumuz' } },
                  { path: 'temel-degerlerimiz-ve-yonetim_kurulu-politikamiz', component: TdypComponent, data: { title: 'Temel Değerlerimiz ve Yönetim Politikamız' } },
                  { path: 'organizasyon-yapisi', component: OrganizasyonComponent, data: { title: 'Organizasyon Yapısı' } },
                  { path: 'yonetim-kurulu', component: YonetimComponent, data: { title: 'Yönetim Kurulu' } },
                  { path: 'meclis', component: MeclisComponent, data: { title: 'Meclis' } },
                  { path: 'disiplin-kurulu', component: DisiplinComponent, data: { title: 'Disiplin Kurulu' } },
                  { path: 'organizasyon-semasi', component: OschemeComponent, data: { title: 'Organizasyon Şeması' } },
                  { path: 'logo-ve-kurumsal-kimlik', component: LogoComponent, data: { title: 'Logo ve Kurumsal Kimlik' } },
                  { path: 'oda-hesaplari', component: OdahesapComponent, data: { title: 'Oda Hesapları' } },
                  { path: 'stratejik-planlar-ve-calisma-programlari', component: SpcpComponent, data: { title: 'Stratejik Planlar ve Çalışma Programları' } },
                  { path: 'kardes-odalar', component: KardesComponent, data: { title: 'Kardeş Odalar' } },
                  { path: 'kvkk', component: KvkkComponent, data: { title: 'KVKK' } },
                  { path: 'etkinlik-takvimi', component: EtakvimComponent, data: { title: 'Etkinlik Takvimi' } },
                  { path: 'ozel-gun-ve-haftalar-takvimi', component: OgtComponent, data: { title: 'Özel Gün ve Haftalar Takvimi' } },
                  { path: 'komite-toplanti-takvimi', component: KttComponent, data: { title: 'Komite Toplantı Takvimi' } },
                  { path: 'hizmet-rehberi', component: HrehberComponent, data: { title: 'Hizmet Rehberi' } }
                ]
            },
            {
              path: 'e-oda', component: EodaComponent, data: { header: 'E-Oda', index: 1 }, children:
                [
                  { path: 'meslek-komitesi-calismalari', component: MkcComponent, data: { title: 'Meslek Komitesi Çalışmaları' } },
                  { path: 'e-formlar', component: EformlarComponent, data: { title: 'E-Formlar' } },
                  { path: 'uye-bilgi-guncelleme-formu', component: UbgfComponent, data: { title: 'Üye Bilgi Güncelleme Formu' } },
                  { path: 'uye-memnuniyet-anketi', component: UmaComponent, data: { title: 'Üye Memnuniyet Anketi' } },
                  { path: 'cagri-merkezi-memnuniyeti-anketi', component: CmaComponent, data: { title: 'Çağrı Merkezi Memnuniyeti Anketi' } },
                  { path: 'meslek-komiteleri-iletisim-formu', component: MkiComponent, data: { title: 'Meslek Komiteleri Iletişim Formu' } },
                  { path: 'ticari-kazanc-beyan-formu', component: TkbfComponent, data: { title: 'Ticari Kazanç Beyan Formu' } },
                  { path: 'izmir-ticaret-noktasi-odasi-sikayet-ve-oneri-sureci', component: SikaoneComponent, data: { title: 'İzmir Ticaret Odası Şikayet ve Öneri Süreci' } },
                  { path: 'bilgi-edinme-birimi', component: BebComponent, data: { title: 'Bilgi Edinme Birimi' } },
                  { path: 'gercek-kisiler-icin-bilgi-edinme-formu', component: GkibefComponent, data: { title: 'Gerçek Kişiler İçin Bilgi Edinme Formu' } },
                  { path: 'tuzel-kisiler-icin-bilgi-edinme-formu', component: TkibefComponent, data: { title: 'Tüzel Kişiler İçin Bilgi Edinme Formu' } },
                ]
            },
            {
              path: 'iztotam', component: IztotamComponent, data: { header: 'IZTOTAM', index: 7 }, children:
                [
                  { path: 'arabuluculuk-surecinin-temel-nitelikleri', component: AstnComponent, data: { title: 'Arabuluculuk Sürecinin Temel Nitelikleri' } },
                  { path: 'alternatif-cozum-yollari', component: AcyComponent, data: { title: 'Alternatif Çözüm Yolları' } },
                  { path: 'arabuluculuk-kurallari', component: AkComponent, data: { title: 'Arabuluculuk Kuralları' } },
                  { path: 'arabulucu-listesi', component: AlComponent, data: { title: 'Arabulucu Listesi' } },
                  { path: 'arabuluculuk-sureci-akis-semasi', component: AsasComponent, data: { title: 'Arabuluculuk Süreci Akış Şeması' } }
                ]
            },
            {
              path: 'uyelik-ve-uyeler', component: UyeComponent, data: { header: 'Üyelik ve Üyeler', index: 2 }, children: [
                { path: 'uyelik-islemleri', component: UyelikislemlerComponent, data: { title: 'Üyelik İşlemleri' } },
                { path: 'online-uye-bilgi-guncelleme', component: OubgComponent, data: { title: 'Online Üye Bilgi Güncelleme' } },
                { path: 'ek-faaliyet-kodu-talebi-dilekcesi', component: EfkComponent, data: { title: 'Ek Faaliyet Kodu Talebi Dilekçesi' } },
                { path: 'faaliyet-kodu-degisiklik-talebi-dilekcesi', component: FkdComponent, data: { title: 'Faaliyet Kodu Değişiklik Talebi Dilekçesi' } },
                { path: 'oda-kayit-beyannameleri', component: OkbComponent, data: { title: 'Oda Kayıt Beyannameleri' } },
                { path: 'uyelik-avantajlari', component: UaComponent, data: { title: 'Üyelik Avantajları' } },
                { path: 'uyelik-ucretleri', component: UuComponent, data: { title: 'Üyelik Ücretleri' } },
                { path: '2022-hizmet-ucretleri-tarifesi', component: HutComponent, data: { title: '2022 Hizmet Ücretleri Tarifesi' } },
                { path: 'aidat-odemeleri', component: AoComponent, data: { title: 'Aidat Ödemeleri' } },
                { path: 'indirimli-kuruluslar', component: IkComponent, data: { title: 'İndirimli Kuruluşlar' } },
                { path: 'uyeler', component: UyelerComponent, data: { title: 'Üyeler' } },
                { path: 'izto-hizmet-standartlari', component: HsComponent, data: { title: 'İZTO Hizmet Standartları' } },
              ]
            },
            {
              path: 'duyurular-ve-etkinlikler', component: DveComponent, data: { header: 'Duyurular ve Etkinlikler', index: 3 }, children: [
                { path: 'duyurular', component: DuyurularComponent, data: { title: 'Duyurular' } },
                { path: 'genel-duyurular', component: GdComponent, data: { title: 'Genel Duyurular' } },
                { path: 'oda-duyurulari', component: OdComponent, data: { title: 'Oda Duyuruları' } },
                { path: 'fuar-duyurulari', component: FdComponent, data: { title: 'Fuar Duyuruları' } },
                { path: 'dis-ticaret-duyurulari', component: DdComponent, data: { title: 'Dış Ticaret Duyuruları' } },
                { path: 'ticaret-sicil-duyurulari', component: TdComponent, data: { title: 'Ticaret Sicil Duyuruları' } },
                { path: 'egitimler', component: EduComponent, data: { title: 'Eğitimler' } },
                { path: 'izqda-toplantı-ve-etkinliklerinize-prestij-katın', component: DexComponent, data: { title: 'İZQda Toplantı ve Etkinliklerinize Prestij Katın' } },
                { path: '2022-yilinda-izmir-limanına-gelecek-olan-kruvaziyer-gemileri', component: GemilerComponent, data: { title: '2022 Yılında İzmir Limanına Gelecek Olan Kruvaziyer Gemileri' } },
                { path: 'vergi-mükellefiyet-durumu-kontrolu', component: DextwoComponent, data: { title: 'Vergi Mükellefiyet Durumu Kontrolü' } },
                { path: 'odamıza-gelmeden-oda-kayıt-isleminizi-elektronik-imza-ile-gerceklestirebilirsiniz', component: DexthreeComponent, data: { title: 'Odamıza Gelmeden, Oda Kayıt İşleminizi Elektronik İmza (E-İmza) İle Gerçekleştirebilirsiniz' } },
                { path: 'mersis', component: DexfourComponent, data: { title: '01.03.2022 Tarihinden İtibaren Mersis Üzerinde Yapılacak Atama Ve Kuruluş Başvurularında E-İmza Uygulaması Başlıyor' } },
                { path: 'izto-meclisinde-gundem-guzelbahce-yerleskesi', component: DexsixComponent, data: { title: 'İZTO Meclisi’nde gündem Güzelbahçe Yerleşkesi' } },
                { path: 'on-kurum', component: DexsevenComponent, data: { title: '10 Kurum “Atıksız Körfez” İçin İZTO’da Buluştu' } },

              ]
            },
            {
              path: 'ticaret-noktasi', component: TicaretComponent, data: { header: 'Ticaret Noktası', index: 5 }, children: [
                { path: 'ihracat-destek-ofisi', component: IdoComponent, data: { title: 'İhracat Destek Ofisi' } },
                { path: 'girisimcilik', component: GirisimcilikComponent, data: { title: 'Girişimcilik' } },
                { path: 'vize-hizmetleri', component: VizeComponent, data: { title: 'Vize Hizmetleri' } },
                { path: 'fuarlar', component: FuarComponent, data: { title: 'Fuarlar' } },
              ]
            },
            {
              path: 'bilgi-bankasi', component: BankComponent, data: { header: 'Bilgi Bankası', index: 6 }, children: [
                { path: 'fire-ve-zaiyat-oranlari', component: FzoComponent, data: { title: 'Fire ve Zayiat Oranları' } },
                { path: 'izmir-ticaret-odasi-ihracatci-firmalar-listesi', component: IflComponent, data: { title: 'İzmir Ticaret Odası İhracatçı Firmalar Listesi' } },
                { path: 'ticari-isletme-tanimlari', component: TitComponent, data: { title: 'Ticari İşletme Tanımları' } },
                { path: 'ulusal-ve-uluslararasi-baglantilar', component: UvubComponent, data: { title: 'Ulusal ve Uluslararası Bağlantılar' } },
                { path: 'covid', component: CovidComponent, data: { title: '' } },
                { path: 'raporlar', component: RaporlarComponent, data: { title: 'Raporlar' } },
                { path: 'ab-raporlari', component: AbComponent, data: { title: 'AB Raporları' } },
                { path: 'kentsel-raporlar', component: KentselrComponent, data: { title: 'Kentsel Raporlar' } },
                { path: 'sektorel-raporlar', component: SektorelComponent, data: { title: 'Sektörel Raporlar' } },
                { path: 'ulke-raporlari', component: UlrComponent, data: { title: 'Ülke Raporları' } },
                { path: 'devlet-tesvikleri-dosyasi', component: DtdsComponent, data: { title: 'Devlet Teşvikleri Dosyası' } },
                { path: 'fuar-raporlari', component: FuarraportlariComponent, data: { title: 'Fuar Raporları' } },
                { path: 'oda-sicili-rehberi', component: OsrComponent, data: { title: 'Oda Sicili Rehberi' } },
                { path: 'yenisehir-ticaret-merkezi', component: YtmComponent, data: { title: 'Yenişehir Ticaret Merkezi' } },
                { path: 'gayrimenkul-danismanligi', component: GdanismanComponent, data: { title: 'Gayrimenkul Danışmanlığı' } },
                { path: 'kruvaziyer-turizmi', component: KturizmComponent, data: { title: 'Kruvaziyer Turizmi' } },
                { path: 'karar-ornekleri', component: IdestekoComponent, data: { title: 'Karar Örnekleri' } },
                { path: 'tescilde-istenen-belgeler', component: TibelgelerComponent, data: { title: 'Tescilde İstenen Belgeler' } },
                { path: 'belge-form-ve-ornek', component: BfoComponent, data: { title: 'Belge Form ve Örnek' } },
                { path: 'mersis-projesi', component: MersispComponent, data: { title: 'Mersis Projesi' } },
                { path: 'genel-bilgiler', component: GenelbilComponent, data: { title: 'Genel Bilgiler' } },
                { path: 'evrak-kontrol-listesi', component: EvraklistComponent, data: { title: 'Evrak Kontrol Listesi' } },
                { path: 'ticaret-sicili-rehberi', component: TsrehberComponent, data: { title: 'Ticaret Sicili Rehberi' } },
                { path: 'antrepo-belgesi', component: AntrepoComponent, data: { title: 'Antrepo Belgesi' } },
                { path: 'ata-karnesi', component: AtakarnesiComponent, data: { title: 'Ata Karnesi' } },
                { path: 'azami-fiyat-tarifesi', component: AftarifeComponent, data: { title: 'Azami Fiyat Tarifesi' } },
                { path: 'bilirkisi', component: BilirkisiComponent, data: { title: 'Bilirkişi' } },
                { path: 'ekspertiz-raporu', component: EkspertizrComponent, data: { title: 'Ekspertiz Raporu' } },
                { path: 'faydali-model-belgesi', component: FaydalimbComponent, data: { title: 'Faydalı Model Belgesi' } },
                { path: 'fiili-tuketim-belgesi', component: FtbelgesiComponent, data: { title: 'Fiili Tüketim Belgesi' } },
                { path: 'yetkili-temsilcilik-belgesi', component: YetkilitbComponent, data: { title: 'Yetkili Temsilcilik Belgesi' } },
                { path: 'yerli-mali-belgesi', component: YmalibComponent, data: { title: 'Yerli Malı Belgesi' } },
                { path: 'turk-mali-belgesi', component: TmalibelgesiComponent, data: { title: 'Türk Malı Belgesi' } },
                { path: 'tobb-sigorta-levhaya-kayit', component: TobbslkComponent, data: { title: 'TOBB Sigorta Levhaya Kayıt' } },
                { path: 'ticari-islemler-rehberi', component: TiisrehComponent, data: { title: 'Ticari İşlemler Rehberi' } },
                { path: 'hukuk-sayfasi', component: HukukComponent, data: { title: 'Hukuk Sayfası' } },
                { path: 'sikca-sorulan-sorular', component: SssComponent, data: { title: 'Sıkça Sorulan Sorular' } },
              ]
            },
            {
              path: 'ihalelerimiz', component: BankComponent, data: { header: 'İhalelerimiz', index: 4 }, children: [
                { path: 'izmir-ticaret-odasi-ihalelerimiz', component: IztoiComponent, data: { title: 'İzmir Ticaret Odası İhaleleri' } },
                { path: 'izq-ihaleleri', component: IzqiComponent, data: { title: 'İZQ İhaleleri' } },
                { path: 'izto-egitim-ve-saglik-vakfi-ihaleleri', component: IztoesComponent, data: { title: 'İZTO Eğitim ve Sağlık Vakfi İhaleleri' } },
                { path: 'izfas-ihaleleri', component: IiComponent, data: { title: 'İZFAŞ İhaleleri' } },
                { path: 'izmir-ekonomi-universitesi-ihaleleri', component: IeuiComponent, data: { title: 'İzmir Ekonomi Üniversitesi İhaleleri' } },
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
    YtmComponent,
    KturizmComponent,
    IdestekoComponent,
    TibelgelerComponent,
    BfoComponent,
    MersispComponent,
    GenelbilComponent,
    EvraklistComponent,
    TsrehberComponent,
    AntrepoComponent,
    AtakarnesiComponent,
    AftarifeComponent,
    BilirkisiComponent,
    EkspertizrComponent,
    FaydalimbComponent,
    FtbelgesiComponent,
    YetkilitbComponent,
    YmalibComponent,
    TmalibelgesiComponent,
    TobbslkComponent,
    TiisrehComponent,
    HukukComponent,
    SssComponent,
    TkbfComponent,
    SikaoneComponent,
    BebComponent,
    GkibefComponent,
    TkibefComponent,
    DexsixComponent,
    DexsevenComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(allRoutes, { scrollPositionRestoration: 'enabled' })
  ],
  providers: [dataTransfer],
  bootstrap: [AppComponent]
})
export class AppModule { }
