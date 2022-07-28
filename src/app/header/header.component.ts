import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() optionSelected = new EventEmitter<string>();
  onSelect(opt: string) {
    this.optionSelected.emit(opt);
  }
  constructor() { }
  ngOnInit(): void {
  }
}
