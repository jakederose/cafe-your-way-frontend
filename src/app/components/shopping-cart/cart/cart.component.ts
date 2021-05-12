import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-items';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];

  cartTotal = 0

  constructor(
    private msg: MessengerService,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
      this.handleSubscription();
      //this.loadCartItems();
     // this.calcCartTotal();
     // this.changeQty;
  }

  handleSubscription() {
    this.msg.getMsg().subscribe((product: Product) => {
        this.loadCartItems();
    })
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.calcCartTotal();
    })
  }

  calcCartTotal() {
     this.cartTotal = 0
     this.cartItems.forEach(item => {
     this.cartTotal += (item.qty * item.price)
      })
  }


  changeQty(updated) {
      console.log("Testing")
      console.log(updated)

      let currentQty = updated.value;
      let updatedQty;
      this.cartItems.forEach(item => {
        if (item.id===updated.id){
          console.log(item.qty)
          updatedQty = item.qty;
          this.cartTotal += (item.qty * item.price);
         //
        }
        else {
          this.cartTotal -= (item.qty * item.price);
        }
      })
      // this.cartItems.find(item => {

      //   if (item.id===updated.id){
      //     console.log(item.qty)
      //     updatedQty = item.qty
      //   }
      // })
      //Find the difference between current and updated.
      //If updated is greater then need to add that item to cart using CartService
      //If current is greater then need to delete that item from cart using CartService
      //Loop

  }


}
