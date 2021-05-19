import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { HeaderComponent } from './components/header/header.component';
import {  HttpClientModule } from '@angular/common/http';
import { PizzaDetailComponent } from './components/pizza-list/pizza-detail/pizza-detail.component';
import { PizzaService } from './shared/sevices/pizza.service';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    HeaderComponent,
    PizzaDetailComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
