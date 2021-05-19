import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  itemDetail = {};
  
  constructor(private httpClient: HttpClient) {

  }
  
  getPizzas() {
    return this.httpClient.get("assets/mockData/pizza.json")
  }
  setPizzaDetail(item) {
    this.itemDetail = Object.assign(item)
  }


  


  getPizzaDetail() {
    return this.itemDetail;
  }

}
