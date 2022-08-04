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
import { MenuPanelComponent } from './menu/menu-panel/menu-panel.component';
import { PanelContentComponent } from './menu/menu-panel/panel-content/panel-content.component';
import { ButtonPanelComponent } from './main/button-panel/button-panel.component';
import { ImgPanelComponent } from './main/img-panel/img-panel.component';
import { SecondButtonPanelComponent } from './main/second-button-panel/second-button-panel.component';
import { ContactComponent } from './contact/contact.component';
import { KurumsalComponent } from './menu/menu-panel/panel-content/kurumsal/kurumsal.component';
import { EodaComponent } from './menu/menu-panel/panel-content/eoda/eoda.component';
import { UyeComponent } from './menu/menu-panel/panel-content/uye/uye.component';
import { DveComponent } from './menu/menu-panel/panel-content/dve/dve.component';
import { TicaretComponent } from './menu/menu-panel/panel-content/ticaret/ticaret.component';
import { BankComponent } from './menu/menu-panel/panel-content/bank/bank.component';
import { IztotamComponent } from './menu/menu-panel/panel-content/iztotam/iztotam.component';

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
    MenuPanelComponent,
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
    IztotamComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
