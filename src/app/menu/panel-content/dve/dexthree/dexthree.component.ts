import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dexthree',
  templateUrl: './dexthree.component.html',
  styleUrls: ['./dexthree.component.css']
})
export class DexthreeComponent implements OnInit {
  title:string='';
  constructor(private route: ActivatedRoute, private pageName:Title) {
    this.route.data.subscribe(data => {this.title = data.title});
    this.pageName.setTitle('Odamıza Gelmeden, Oda Kayıt İşleminizi Elektronik İmza (E-İmza) İle Gerçekleştirebilirsiniz');
   }

  ngOnInit(): void {
  }
}
