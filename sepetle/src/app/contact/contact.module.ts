import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ],
  exports:[
    ContactUsComponent
  ]
})
export class ContactModule { }
