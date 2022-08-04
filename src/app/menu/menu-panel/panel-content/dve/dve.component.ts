import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dve',
  templateUrl: './dve.component.html',
  styleUrls: ['./dve.component.css']
})
export class DveComponent implements OnInit {
  @Input() subSection: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
