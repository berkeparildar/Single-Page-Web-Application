import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { dataTransfer } from '../dataTransfer.service';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  header:string;
  ngOnInit(): void { }
  constructor(private dataService:dataTransfer) {
    this.dataService.dataUpdated.subscribe((status:string) => {this.header = status;})
   }


}
