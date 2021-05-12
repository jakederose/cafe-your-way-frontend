import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { CartItem } from 'src/app/models/cart-items';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: CartItem

  qty:any;

  @Output() updatedQty = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.qty = this.cartItem.qty;
  }

  updateQty(value, id){
   let qty = this.qty
    this.updatedQty.emit({qty, id})
  }


}
