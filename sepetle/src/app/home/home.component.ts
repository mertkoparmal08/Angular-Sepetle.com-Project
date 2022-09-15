import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items!:object;
  brands=[
    {
     imageUrl: '../assets/Adidas_Logo.png',
     title: 'Adidas'
    },
    {
     imageUrl: '../assets/nike-logo.png',
     title: 'Nike'
    },
    {
     imageUrl: '../assets/puma-logo.png',
     title: 'Puma'
    },
    {
     imageUrl: '../assets/loft-logo.png',
     title: 'Loft'
    },
    {
     imageUrl: '../assets/mavi-logo.png',
     title: 'Mavi'
    },
    {
     imageUrl: '../assets/pullandbear-logo.png',
     title: 'Pull&Bear'
    },
    {
     imageUrl: '../assets/polo-logo.png',
     title: 'Polo'
    },
    {
     imageUrl: '../assets/pierre-cardin-logo.png',
     title: 'PierreCardin'
    }
  ]

  constructor(private productservice:MainService ) { }

  ngOnInit(): void {
    this.productservice.fillTheArray()
    this.items = this.productservice.denemItem
  }

  addToCard(product:any){
    localStorage.setItem(product.id, JSON.stringify(product));
    alert(product.title+' Sepetinize Eklendi')
  }

}
