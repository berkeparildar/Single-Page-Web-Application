import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dexeig',
  templateUrl: './dexeig.component.html',
  styleUrls: ['./dexeig.component.css']
})
export class DexeigComponent implements OnInit {
  title: string = '';

  constructor(private route: ActivatedRoute, private pageName: Title) {
    this.route.data.subscribe(data => { this.title = data.title });
    this.pageName.setTitle('8 Oda ve Borsadan Ankara ziyareti');
  }

  ngOnInit(): void {
  }

}
