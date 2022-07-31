import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-content',
  templateUrl: './panel-content.component.html',
  styleUrls: ['./panel-content.component.css']
})
export class PanelContentComponent implements OnInit {
  @Input('pageDisplayString') title: string = '';
  
  constructor() { }

  ngOnInit(): void { }
}
