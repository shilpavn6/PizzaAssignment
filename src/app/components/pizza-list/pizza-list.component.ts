import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../../shared/sevices/pizza.service';
import { Pizza } from '../../shared/models/pizza.model';
import { NgbModal, ModalDismissReasons, NgbModalRef, } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  allPizzaArray: any = [];
  closeResult: any;
  pizzaDetailObj: any;
  statusDetails = [{
    id: 0, status: "Order Received"
  },
  {
    id: 1, status: "Preparing"
  },
  {
    id: 2, status: "Ready To Deliver"
  }
  ];
  currentStatus: any;
  constructor(private pizzaService: PizzaService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.getPizza();
  }
  getPizza() {
    this.pizzaService.getPizzas().subscribe(data => {
      console.log(data);
      this.allPizzaArray = data;
      var totalPizzasOrderPrice = 0;
      this.allPizzaArray.forEach(array => {
        let pizzaArray = array['pizzasOrdered'];
        pizzaArray.forEach(element => {
          totalPizzasOrderPrice += element['price'];
        });
        array['totalAmount'] = totalPizzasOrderPrice;
        
        let curStatus= this.statusDetails.find(element => {
          if (array['status'] == element['id']) {
            return element['status'];
          }
        });
        array['status']= curStatus['status'];
      });
    });
  }
  viewPizzaDetail(content, pizzaDetail) {
    this.pizzaDetailObj = Object.assign(pizzaDetail);
          this.currentStatus = this.statusDetails.find(element => {
            if (this.pizzaDetailObj['status'] == element['status']) {
              return element['id'];
            }
          });
          console.log(this.currentStatus);    
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}






