import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-iztotam',
  templateUrl: './iztotam.component.html',
  styleUrls: ['./iztotam.component.css']
})
export class IztotamComponent implements OnInit {
  @Input() subSection: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
