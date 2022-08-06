import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vizyon',
  templateUrl: './vizyon.component.html',
  styleUrls: ['./vizyon.component.css']
})
export class VizyonComponent implements OnInit {
  title: string = '';
  constructor(private router: ActivatedRoute) {
    this.router.data.subscribe(data => {this.title = data.title})
   }

  ngOnInit(): void {
  }

}
