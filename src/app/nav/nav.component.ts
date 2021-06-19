import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from '../cart/cart.component';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';

const swal: SweetAlert = _swal as any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  itemCounter!: number;

  constructor( private cart: CartService, private modalService:NgbModal) { 
    this.cart.itemCount.subscribe((res: any) => {  
      this.itemCounter = res;  
      console.log(this.itemCounter)
    }) 
  }

  ngOnInit(): void {
  }
  openCart(){
    let value = this.cart.getCartItem();
    if(!value.length){
      swal("You have not selected any Items"); 
    } else{
      const modalRef = this.modalService.open(CartComponent);
      modalRef.componentInstance.cartItem = value;
      modalRef.componentInstance.itemCounter = this.itemCounter;
    }
  }

}
