import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cagri_merkezi_anketi',
  templateUrl: './cma.component.html',
  styleUrls: ['./cma.component.css']
})
export class CmaComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Çağrı Merkezi Memnuniyeti Anketi');
   }

  ngOnInit(): void {
  }
}
