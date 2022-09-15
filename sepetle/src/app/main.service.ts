import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  products:Object = [
    {
      id:1,
      imageUrl: '../assets/products/adidas-response-ayakkabi.png',
      brands: 'Adidas',
      category: 'shoes',
      title: 'Adidas Response Yürüyüş Ayakkabısı',
      price: 949,
    },
    {
      id:2,
      imageUrl: '../assets/products/adidas-lifestyle.png',
      brands: 'Adidas',
      category: 'shoes',
      title: 'Adidas Lifestyle Ayakkabı',
      price: 2099,
    },
    {
      id:3,
      imageUrl: '../assets/products/adidas-outdoor.png',
      brands: 'Adidas',
      category: 'shoes',
      title: 'Adidas Outdoor Ayakkabı',
      price: 2299,
    },
    {
      id:4,
      imageUrl: '../assets/products/nike-airmax.png',
      brands: 'Nike',
      category: 'shoes',
      title: 'Nike Airmax Ayakkabı',
      price: 1599,
    },
    {
      id:5,
      imageUrl: '../assets/products/nike-beige.png',
      brands: 'Nike',
      category: 'shoes',
      title: 'Nike Beige Koşu Ayakkabısı',
      price: 1159,
    },
    {
      id:6,
      imageUrl: '../assets/products/nike-training.png',
      brands: 'Nike',
      category: 'shoes',
      title: 'Nike Training Ayakkabı',
      price: 1249,
    },

    {
      id:7,
      imageUrl: '../assets/products/puma-ferrari.png',
      brands: 'Puma',
      category: 'shoes',
      title: 'Puma Ferrari Lifestyle Ayakkabı',
      price: 1125,
    },
    {
      id:8,
      imageUrl: '../assets/products/puma-electron.png',
      brands: 'Puma',
      category: 'shoes',
      title: 'Puma Electron Lifestyle Ayakkabı',
      price: 1299,
    },
    {
      id:9,
      imageUrl: '../assets/products/puma-lifestyle.png',
      brands: 'Puma',
      category: 'shoes',
      title: 'Puma X-Ray Lifestyle Ayakkabı',
      price: 1399,
    },
    {
      id:10,
      imageUrl: '../assets/products/polo1.png',
      brands: 'Polo',
      category: 'tshirt',
      title: 'Polo Sarı Tişört',
      price: 233,
    },
    {
      id:11,
      imageUrl: '../assets/products/polo2.png',
      brands: 'Polo',
      category: 'tshirt',
      title: 'Polo Bej Tişört',
      price: 229,
    },
    {
      id:12,
      imageUrl: '../assets/products/polo3.png',
      brands: 'Polo',
      category: 'tshirt',
      title: 'Polo Beyaz Tişört',
      price: 249,
    },
    {
      id:13,
      imageUrl: '../assets/products/mavi1.png',
      brands: 'Mavi',
      category: 'tshirt',
      title: 'Mavi Mavi Tişört',
      price: 118,
    },
    {
      id:14,
      imageUrl: '../assets/products/mavi2.png',
      brands: 'Mavi',
      category: 'tshirt',
      title: 'Mavi Beyaz Tişört',
      price: 97,
    },
    {
      id:15,
      imageUrl: '../assets/products/mavi3.png',
      brands: 'Mavi',
      category: 'tshirt',
      title: 'Mavi Mavi Tişört',
      price: 132,
    },
    {
      id:16,
      imageUrl: '../assets/products/pc1.png',
      brands: 'Pierre-Cardin',
      category: 'tshirt',
      title: 'Pierre Cardin Siyah Tişört',
      price: 184,
    },
    {
      id:17,
      imageUrl: '../assets/products/pc2.png',
      brands: 'Pierre-Cardin',
      category: 'tshirt',
      title: 'Pierre Cardin Beyaz Tişört',
      price: 289,
    },
    {
      id:18,
      imageUrl: '../assets/products/pc3.png',
      brands: 'Pierre-Cardin',
      category: 'tshirt',
      title: 'Pierre Cardin Siyah Tişört',
      price: 262,
    },
    {
      id:19,
      imageUrl: '../assets/products/polo4.png',
      brands: 'Polo',
      category: 'tshirt',
      title: 'Polo Sarı Tişört',
      price: 214,
    },
    {
      id:20,
      imageUrl: '../assets/products/nike1.png',
      brands: 'Nike',
      category: 'tshirt',
      title: 'Nike Siyah Tişört',
      price: 449,
    },
    {
      id:21,
      imageUrl: '../assets/products/nike2.png',
      brands: 'Nike',
      category: 'tshirt',
      title: 'Nike Siyah Tişört',
      price: 399,
    },
    {
      id:22,
      imageUrl: '../assets/products/adidas1.png',
      brands: 'Adidas',
      category: 'tshirt',
      title: 'Adidas Siyah Tişört',
      price: 399,
    },
    {
      id:23,
      imageUrl: '../assets/products/adidas2.png',
      brands: 'Adidas',
      category: 'tshirt',
      title: 'Adidas Gri Tişört',
      price: 359,
    },
    {
      id:24,
      imageUrl: '../assets/products/puma1.png',
      brands: 'Puma',
      category: 'tshirt',
      title: 'Puma Mavi Tişört',
      price: 299,
    },
    {
      id:25,
      imageUrl: '../assets/products/puma2.png',
      brands: 'Puma',
      category: 'tshirt',
      title: 'Puma Mavi Tişört',
      price: 217,
    },
    {
      id:26,
      imageUrl: '../assets/products/loft1.png',
      brands: 'Loft',
      category: 'tshirt',
      title: 'Loft Beyaz Tişört',
      price: 79,
    },
    {
      id:27,
      imageUrl: '../assets/products/loft2.png',
      brands: 'Loft',
      category: 'tshirt',
      title: 'Loft Beyaz Tişört',
      price: 89,
    },
    {
      id:28,
      imageUrl: '../assets/products/pb1.png',
      brands: 'P&B',
      category: 'tshirt',
      title: 'Pull and Bear Siyah Tişört',
      price: 115,
    },
    {
      id:29,
      imageUrl: '../assets/products/pb2.png',
      brands: 'P&B',
      category: 'tshirt',
      title: 'Pull and Bear Mavi Tişört',
      price: 135,
    },
    {
      id:30,
      imageUrl: '../assets/products/pb3.png',
      brands: 'P&B',
      category: 'tshirt',
      title: 'Pull and Bear Beyaz Tişört',
      price: 147,
    },
    {
      id:31,
      imageUrl: '../assets/products/nike-canta1.png',
      brands: 'Nike',
      category: 'bag',
      title: 'Nike Siyah Çanta',
      price: 549,
    },
    {
      id:32,
      imageUrl: '../assets/products/nike-canta2.png',
      brands: 'Nike',
      category: 'bag',
      title: 'Nike Siyah Çanta',
      price: 749,
    },
    {
      id:33,
      imageUrl: '../assets/products/adidas-canta1.png',
      brands: 'Adidas',
      category: 'bag',
      title: 'Adidas Siyah Çanta',
      price: 341,
    },
    {
      id:34,
      imageUrl: '../assets/products/adidas-canta2.png',
      brands: 'Adidas',
      category: 'bag',
      title: 'Adidas Siyah Çanta',
      price: 629,
    },
    {
      id:35,
      imageUrl: '../assets/products/puma-canta1.png',
      brands: 'Puma',
      category: 'bag',
      title: 'Puma Siyah Çanta',
      price: 279,
    },
    {
      id:36,
      imageUrl: '../assets/products/puma-canta2.png',
      brands: 'Puma',
      category: 'bag',
      title: 'Puma Siyah Çanta',
      price: 399,
    },
    {
      id:37,
      imageUrl: '../assets/products/pc-canta1.png',
      brands: 'Pierre-Cardin',
      category: 'bag',
      title: 'Pierre-Cardin Siyah Çanta',
      price: 499,
    },
    {
      id:38,
      imageUrl: '../assets/products/pc-canta2.png',
      brands: 'Pierre-Cardin',
      category: 'bag',
      title: 'Pierre-Cardin Siyah Çanta',
      price: 599,
    },
    {
      id:39,
      imageUrl: '../assets/products/polo-canta1.png',
      brands: 'Polo',
      category: 'bag',
      title: 'Polo Siyah Çanta',
      price: 369,
    },
  ];
  denemItem!:object;
  constructor() {}

  shuffleArray(array: any): any {
    var m = array.length,
      t,
      i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }
  
  fillTheArray(){
   this.denemItem = this.shuffleArray(this.products)
  }

}
