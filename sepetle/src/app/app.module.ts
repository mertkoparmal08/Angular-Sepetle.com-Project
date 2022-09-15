import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrandsComponent } from './brands/brands.component';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { ProductsModule } from './products/products.module';
import { BasketModule } from './basket/basket.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrandsComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    ContactModule,
    ProductsModule,
    BasketModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
