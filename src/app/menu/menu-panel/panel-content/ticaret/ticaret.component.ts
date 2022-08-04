import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticaret',
  templateUrl: './ticaret.component.html',
  styleUrls: ['./ticaret.component.css']
})
export class TicaretComponent implements OnInit {
  @Input() subSection: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
