import { addPurchase } from '@actions/purchase.action';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '@entities/product.entity';
import { IPurchase } from '@entities/purchase.entity';
import { Store } from '@ngrx/store';
import { IAppState } from 'app/app-state';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  product!: IProduct;
  @Output()
  addPurchaseEmitter: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  addPurchase() {
    const purchase = { product: this.product, amount: 1 } as IPurchase;
    this.addPurchaseEmitter.emit(purchase);
  }
}
