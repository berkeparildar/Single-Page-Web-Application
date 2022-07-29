import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  receivedName: string;
  loadedOption = 'menu';
  loadedNavOption = 'Kurumsal';
  index: number = 99;

  getFromHeader(item: string) {
    this.receivedName = item;
    console.log(this.receivedName);
  }


  onNavigate(opt: string) {
    this.loadedOption = opt;
  }

  onNavNavigate(opte: string) {
    this.loadedNavOption = opte;
    if (this.loadedNavOption === 'Kurumsal') {
      this.index = 0;
      console.log(this.index);
    }
    else if (this.loadedNavOption === 'E-Oda') {
      this.index = 1;
      console.log(this.index);
    }
    else if (this.loadedNavOption === 'Üyelik ve Üyeler') {
      this.index = 2;
      console.log(this.index);
    }
    else if (this.loadedNavOption === 'Duyuru ve Etkinlikler') {
      this.index = 3;
      console.log(this.index);
    }
    else if (this.loadedNavOption === 'İhalelerimiz') {
      this.index = 4;
      console.log(this.index);
    }
    else if (this.loadedNavOption === 'Ticaret Noktası') {
      this.index = 5;
      console.log(this.index);
    }
    else if (this.loadedNavOption === 'Bilgi Bankası') {
      this.index = 6;
      console.log(this.index);
    }
    else if (this.loadedNavOption === 'İZTOTAM') {
      this.index = 7;
      console.log(this.index);
    }
  }

  ngOnInit(): void {
  }
}
