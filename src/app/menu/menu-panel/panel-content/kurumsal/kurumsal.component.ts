import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kurumsal',
  templateUrl: './kurumsal.component.html',
  styleUrls: ['./kurumsal.component.css']
})
export class KurumsalComponent implements OnInit {
  @Input() subSection: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
