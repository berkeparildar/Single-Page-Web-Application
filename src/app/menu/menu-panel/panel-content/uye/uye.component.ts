import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-uye',
  templateUrl: './uye.component.html',
  styleUrls: ['./uye.component.css']
})
export class UyeComponent implements OnInit {
  @Input() subSection: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
