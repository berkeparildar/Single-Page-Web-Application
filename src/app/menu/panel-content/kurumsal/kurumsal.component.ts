import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataTransfer } from 'src/app/dataTransfer.service';

@Component({
  selector: 'app-kurumsal',
  templateUrl: './kurumsal.component.html',
  styleUrls: ['./kurumsal.component.css']
})
export class KurumsalComponent implements OnInit {
  header:string;
  index : number;
  constructor(private router:ActivatedRoute, private dataService: dataTransfer) { 
    this.router.data.subscribe(data => { this.header = data.header });
    this.router.data.subscribe(data => { this.index = data.index });
    this.dataService.dataUpdated.emit(this.header);
    this.dataService.indexUpdated.emit(this.index);
  }

  ngOnInit(): void {
  }

}
