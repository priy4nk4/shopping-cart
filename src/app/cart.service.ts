import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemCount =new Subject<Number>();  

  constructor() { }

  setCartItem(data:any[]){
    console.log(data);
    sessionStorage.setItem('myItems', JSON.stringify(data));
  }
  getCartItem(){
    let item = sessionStorage.getItem('myItems');
    return JSON.parse(item|| '{}');
  }

  clearCart(){
    sessionStorage.clear();
  }
}
