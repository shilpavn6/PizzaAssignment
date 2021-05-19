import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { PizzaService } from '../../shared/sevices/pizza.service';
import { Pizza } from '../../shared/models/pizza.model';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit, OnChanges {
  allPizzaArray: any = [];
  showDetailItemModal: boolean = false;
  
  pizzaDetailObj: any;
  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.getPizza();

  }
  ngOnChanges() {

  }
  refreshParent(bool: boolean) {
    this.showDetailItemModal = bool;
  }
  getPizza() {
    this.pizzaService.getPizzas().subscribe(data => {
      console.log(data);
      this.allPizzaArray = data;
      this.getTotalAmount();
    });

  }
  getTotalAmount() {
    var totalPizzasOrderPrice = 0;
    this.allPizzaArray.forEach(array => {
      let pizzaArray = array['pizzasOrdered'];
      pizzaArray.forEach(element => {
        totalPizzasOrderPrice += element['price'];
      });
      pizzaArray['totalAmount'] = totalPizzasOrderPrice;
    });
    // var totalPizzasOrder=0;
    // let priceArray = this.pizzaDetailObj['pizzasOrdered']
    // priceArray.forEach(element => {
    //   totalPizzasOrder += element['price']

    // });
    // this.pizzaDetailObj['totalAmount'] = totalPizzasOrder;
  }

  viewPizzaDetail(item) {
    this.showDetailItemModal = true;
    this.pizzaDetailObj = Object.assign(item);

  }

}






