import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
import { CartService } from '../cart.service';

const swal: SweetAlert = _swal as any;


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() cartItem!: any[];
  @Input() itemCounter!: number;

  constructor(private activeModal: NgbActiveModal,private cart: CartService) { 
  }

  ngOnInit(): void {
  }

  checkout(){
    this.activeModal.dismiss();
    swal("Good job!", "You have succesfully placed the order!", "success");
    this.cart.clearCart();
    this.cart.itemCount.next(0);
  }

}
