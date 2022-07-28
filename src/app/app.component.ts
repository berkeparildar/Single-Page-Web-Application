import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedOption = 'menu';
  loadedNavOption = 'Kurumsal';
  index: number = 99;
  onNavigate(opt: string) {
    this.loadedOption = opt;
  }
  onNavNavigate(opte: string) {
    this.loadedNavOption = opte;
    if(this.loadedNavOption==='Kurumsal'){
      this.index=0;
      console.log(this.index + 'aaaaaaaaaaaaa');
    }
    else if(this.loadedNavOption==='E-Oda'){
      this.index=1;
      console.log(this.index + 'aaaaaaaaaaaaa');
    }
    
  }
  ngOnInit(): void {
  }
 
    
  
}
