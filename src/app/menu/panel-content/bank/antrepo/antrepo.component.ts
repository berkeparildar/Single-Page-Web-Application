import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-antrepo',
  templateUrl: './antrepo.component.html',
  styleUrls: ['./antrepo.component.css']
})
export class AntrepoComponent implements OnInit {

  title: string = '';
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => { this.title = data.title });
  }

  ngOnInit(): void {
  }
}
