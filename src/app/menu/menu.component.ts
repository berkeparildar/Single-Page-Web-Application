import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  loadedOption = 'menu';
  lName: string;
  headerArray = ['Kurumsal', 'E-Oda', 'Üyelik ve Üyeler', 'Duyuru ve Etkinlikler', 'İhalelerimiz', 'Ticaret Noktası', 'Bilgi Bankası', 'İZTOTAM', 'İletişim'];

  @Input() num: number;
  ngOnInit(): void {
  }
  getFromChild(item: string) {
    this.lName = item;
  }
}
