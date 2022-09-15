import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { MainService } from 'src/app/main.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit { 
  
  items!:object;

  term = '';

  Category=['Çanta','Ayakkabı','Tişört'];

  selected(item:string){
    this.term=item;
  }

  ngOnInit(): void {
    this.productservice.fillTheArray()
    this.items = this.productservice.denemItem
  }

  constructor(private productservice:MainService ){}

  addToCard(product:any){
    localStorage.setItem(product.id, JSON.stringify(product));
    alert(product.title+' Sepetinize Eklendi')
  }
}


