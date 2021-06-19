import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../cart.service';
import { AlertModalComponent } from '../alert-modal/alert-modal.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() cartItem!: any[];
  @Input() itemCounter!: number;

  constructor(private activeModal: NgbActiveModal,
    private cart: CartService,
    private modalService:NgbModal) { 
  }

  ngOnInit(): void {
  }

  checkout(){
    this.activeModal.dismiss();
    this.modalService.open(AlertModalComponent);
    this.cart.clearCart();
    this.cart.itemCount.next(0);
  }

}
