import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  loadedOption = 'menu';
  @Input() lName: string;
  headerArray = ['Kurumsal', 'E-Oda', 'Üyelik ve Üyeler', 'Duyuru ve Etkinlikler', 'İhalelerimiz', 'Ticaret Noktası', 'Bilgi Bankası', 'İZTOTAM', 'İletişim'];
  @Input() num: number;
  ngOnInit(): void { }
  constructor() { }

  getFromChild(item: string) {
    this.lName = item;
  }
}
