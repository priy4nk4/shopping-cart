import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  allData: any[] = [];
  data = [{id:1, first:'Mark', last:'Otto', count:0},
  {id:2, first:'Jacob', last:'Thornton', count:0},
  {id:3, first:'Larry', last:'Brandon', count:0}]

  constructor(private cart: CartService) { }

  ngOnInit(): void {
  }

 /*add Items to cart*/
  addToCart(value:any){
    if(this.allData.length){
      let index = this.allData.findIndex(ele => ele.id === value?.id)
      if(index != -1){ 
        this.allData[index].count++;
      } else {
        value.count++;
        this.allData.push(value); /*remove duplicate Items and increment count value*/
      }
    } else{
      value.count++;
      this.allData.push(value);
    }
    this.cart.setCartItem(this.allData);
    let itemCount = this.allData.reduce((a,b) => a+b.count, 0);
    this.cart.itemCount.next(itemCount);
  }

}
