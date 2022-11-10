import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-yenisehir_ticaret_merkezi',
  templateUrl: './ytm.component.html',
  styleUrls: ['./ytm.component.css']
})
export class YtmComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Yenişehir Ticaret Merkezi');
   }
  ngOnInit(): void {
  }
}
