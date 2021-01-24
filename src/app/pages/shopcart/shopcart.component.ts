import {
  addPurchase,
  deletePurchase,
  minusPurchase,
} from '@actions/purchase.action';
import { Component, OnInit } from '@angular/core';
import { IPurchase } from '@entities/purchase.entity';
import { select, Store } from '@ngrx/store';
import { IAppState } from 'app/app-state';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.scss'],
})
export class ShopcartComponent implements OnInit {
  purchases$ = this.store.pipe(select((state) => state.purchases));
  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {}

  get totalBasket$(): Observable<number> {
    return this.purchases$.pipe(
      map((purchase) =>
        purchase.reduce((total, p) => total + p.amount * p.product.price, 0)
      )
    );
  }
  get subTotalValue(): number {
    let sum = 0;
    // if (this.purchase !== null && this.purchase.length > 0)
    //   this.purchase.forEach((e) => {
    //     sum += e.amount * e.product.price;
    //   });
    return sum;
  }
  addPurchase(purchase: IPurchase) {
    this.store.dispatch(addPurchase({ purchase }));
  }
  minusPurchase(purchase: IPurchase) {
    this.store.dispatch(minusPurchase({ purchase }));
  }
  deletePurchase(productId: number) {
    this.store.dispatch(deletePurchase({ productId }));
  }
  handleAmount(idx: number, isPlus: boolean) {
    // if (isPlus) {
    //   this.purchase[idx].amount++;
    // } else {
    //   this.purchase[idx].amount--;
    // }
  }
  handleRemove(idx: number) {
    // this.purchase.splice(idx, 1);
  }
}
