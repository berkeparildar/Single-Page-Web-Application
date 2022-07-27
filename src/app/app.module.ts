import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Slides } from './slides/slides.component';
import { SlideItemComponent } from './slides/slide-item/slide-item.component';
import { SlideListComponent } from './slides/slide-list/slide-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Slides,
    SlideItemComponent,
    SlideListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
