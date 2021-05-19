import { Component, EventEmitter, Input,OnInit, Output } from '@angular/core';
import { element } from 'protractor';
import { PizzaService } from 'src/app/shared/sevices/pizza.service';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit {
  @Input() pizzaDetailObj:any;
  @Output() childStatus = new EventEmitter<boolean>();
  statusDetails = [{
    id: 0, status: "Order Received"
  },
  {
    id: 1, status: "Preparing"
  },
  {
    id: 2, status: "Ready To Deliver"
  }
  ]
  hidePopUp:boolean =true;
  currentStatus:any;
  constructor() { }

  ngOnInit() {
   this.getPizzaDetail();
  }

  getPizzaDetail(){
    var totalPizzasOrder=0;
    let pizzArray = this.pizzaDetailObj['pizzasOrdered']
    pizzArray.forEach(element => {
      totalPizzasOrder += element['price']
      
    });
    this.pizzaDetailObj['totalAmount'] = totalPizzasOrder;
    this.currentStatus=this.statusDetails.find(element=>{
      if(this.pizzaDetailObj['status'] == element['id']){
        return element['id'];
      }
    });
    console.log(this.currentStatus)
  }
  close(){
    this.hidePopUp=false;
    this.childStatus.emit(this.hidePopUp);
  }
  
}
