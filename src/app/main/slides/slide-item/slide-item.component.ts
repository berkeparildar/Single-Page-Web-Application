import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-slide-item',
  templateUrl: './slide-item.component.html',
  styleUrls: ['./slide-item.component.css']
})
export class SlideItemComponent implements OnInit {
  public title: string;
  public description: string;
  public imagePath: string;
  constructor(@Inject(String) title: string, @Inject(String) desc: string, @Inject(String) imagePath: string) {
    this.title = title;
    this.description = desc;
    this.imagePath = imagePath;
  }

  ngOnInit(): void {
  }

}
