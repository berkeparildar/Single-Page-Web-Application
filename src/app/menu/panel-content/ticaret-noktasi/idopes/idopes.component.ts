import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-idopes',
  templateUrl: './idopes.component.html',
  styleUrls: ['./idopes.component.css']
})
export class IdopesComponent implements OnInit {
  title: string = '';
  constructor(private route: ActivatedRoute, private pageName: Title) {
    this.route.data.subscribe(data => { this.title = data.title });
    this.pageName.setTitle('İhracat Destek Ofisi Projesi Eğitim Sunumları');
  }
  ngOnInit(): void {
  }
}