import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.css']
})
export class MenuPanelComponent implements OnInit {
  @Input('tit') title: string = 'a';
  constructor() { }

  ngOnInit(): void {
  }

}
