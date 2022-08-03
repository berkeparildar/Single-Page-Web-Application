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
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
