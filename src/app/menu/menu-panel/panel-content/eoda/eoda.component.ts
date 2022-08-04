import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eoda',
  templateUrl: './eoda.component.html',
  styleUrls: ['./eoda.component.css']
})
export class EodaComponent implements OnInit {
  @Input() subSection: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
