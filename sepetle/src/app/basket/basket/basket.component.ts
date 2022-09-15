import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { DateFormControl } from '../DateFormControl';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
})
export class BasketComponent implements OnInit {
  cardForm= new FormGroup({
    name: new FormControl(null,[
      Validators.required,
      Validators.minLength(3)
    ]),
    cardNumber: new FormControl(null,[
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16)
    ]),
    expiration: new DateFormControl(null,[
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)
    ]),
    securityCode: new FormControl(null,[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3)
    ]),
  })
  
  constructor() { 
  }

  ngOnInit(): void {
    this.allStorage();
    if(this.total<1000){
      this.shippingCost=50;
    }
  }

  values:any = [];
  total=0;
  shippingCost=0;
  allStorage(): void {
      var keys = Object.keys(localStorage),
      i = keys.length;
    while (i--) {
      if(keys[i] !== null){
        this.values.push(localStorage.getItem(keys[i]));
      }
    }

    for(let i=0;i<this.values.length;i++){
      (this.values)[i]=JSON.parse((this.values)[i]);
      this.total+=((this.values)[i].price+0.9);
    }
  }


  removeItem(product:any){
    localStorage.removeItem(product.id);
    window.location.reload();
  }

  onSubmit(){
    console.log('Giriş Başarılı');
  }

  resetForm(){
    this.cardForm.reset();
  }

  resetBasket(){
    this.cardForm.reset();
    localStorage.clear();
    window.location.reload();
  }
}
