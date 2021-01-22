import { Component, OnInit } from '@angular/core';
import { IPurchase } from 'src/app/shared/entities/purchase.entity';

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.scss'],
})
export class ShopcartComponent implements OnInit {
  purchase: IPurchase[];
  constructor() {
    this.purchase = [
      {
        product: {
          id: 1,
          name: 'Generic Steel Towels',
          price: 660.0,
          photo: 'http://lorempixel.com/640/480/cats',
        },
        amount: 1,
      },
      {
        product: {
          id: 1,
          name: 'Generic Steel Towels',
          price: 660.0,
          photo: 'http://lorempixel.com/640/480/cats',
        },
        amount: 1,
      },
    ];
  }

  ngOnInit(): void {}

  get subTotalValue(): number {
    let sum = 0;
    if (this.purchase !== null && this.purchase.length > 0)
      this.purchase.forEach((e) => {
        sum += e.amount * e.product.price;
      });
    return sum;
  }
  handleAmount(idx: number, isPlus: boolean) {
    if (isPlus) {
      this.purchase[idx].amount++;
    } else {
      this.purchase[idx].amount--;
    }
  }
  handleRemove(idx: number) {
    this.purchase.splice(idx, 1);
  }
}
