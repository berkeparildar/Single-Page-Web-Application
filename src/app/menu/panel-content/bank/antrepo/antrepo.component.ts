import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-antrepo',
  templateUrl: './antrepo.component.html',
  styleUrls: ['./antrepo.component.css']
})
export class AntrepoComponent implements OnInit {

  title: string = '';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Antrepo Belgesi');
   }

  ngOnInit(): void {
  }
}
