import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  @Input()  imageUrl:string='';
  @Input()  title:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
