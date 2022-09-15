import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms';
import { BasketRoutingModule } from './basket-routing.module';
import { BasketComponent } from './basket/basket.component';
import { ProductsModule } from '../products/products.module';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    BasketComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    BasketRoutingModule,
    ProductsModule,
    ReactiveFormsModule
  ],
  exports:[
    BasketComponent
  ]
})
export class BasketModule { }
