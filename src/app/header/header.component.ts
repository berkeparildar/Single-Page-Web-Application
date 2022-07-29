import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() optionSelected = new EventEmitter<string>();
  @Output() navOptionSelected = new EventEmitter<string>();
  @Output() navDropSelected = new EventEmitter<string>();

  onSelect(opt: string) {
    this.optionSelected.emit(opt);
  }

  onSelectNav(navOpt: string) {
    this.navOptionSelected.emit(navOpt);
  }

  onSelectDrop(dropOpt: string) {
    this.navDropSelected.emit(dropOpt);
  }

  constructor() { }
  ngOnInit(): void { }
}
