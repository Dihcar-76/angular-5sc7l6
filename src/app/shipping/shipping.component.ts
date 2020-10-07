import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts;
  
  constructor(private cartService: CartService,
  private dataService: DataService) { }

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  selectShipping(shipping){
    this.dataService.setShipping(shipping);
  }

}