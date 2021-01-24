import {
  addPurchase,
  deletePurchase,
  minusPurchase,
} from '@actions/purchase.action';
import { IPurchase } from '@entities/purchase.entity';
import { createReducer, on } from '@ngrx/store';

export const INITIAL_PURCHASE: IPurchase[] = localStorage.getItem('app-state')
  ? JSON.parse(localStorage.getItem('app-state') ?? '').purchases
  : [];

export const purchaseReducer = createReducer<IPurchase[]>(
  INITIAL_PURCHASE,
  on(addPurchase, (state, action) => {
    const appState = localStorage.getItem('app-state');
    let purchases = state.concat();
    const idx = purchases.findIndex(
      (p) => p.product.id === action.purchase.product.id
    );
    if (idx === -1) {
      purchases = state.concat({ ...action.purchase });
    } else {
      purchases[idx] = { ...purchases[idx], amount: purchases[idx].amount + 1 };
    }
    if (appState) {
      localStorage.setItem(
        'app-state',
        JSON.stringify({ ...JSON.parse(appState), purchases: purchases })
      );
    } else {
      localStorage.setItem(
        'app-state',
        JSON.stringify({ purchases: purchases })
      );
    }
    return purchases;
  }),
  on(minusPurchase, (state, action) => {
    const appState = localStorage.getItem('app-state');
    let purchases = state.concat();
    const idx = purchases.findIndex(
      (p) => p.product.id === action.purchase.product.id
    );
    if (purchases[idx].amount > 1) {
      purchases[idx] = { ...purchases[idx], amount: purchases[idx].amount - 1 };
    } else {
      purchases = state
        .filter((p) => p.product.id !== action.purchase.product.id)
        .concat();
    }
    if (appState) {
      localStorage.setItem(
        'app-state',
        JSON.stringify({ ...JSON.parse(appState), purchases: purchases })
      );
    } else {
      localStorage.setItem(
        'app-state',
        JSON.stringify({ purchases: purchases })
      );
    }
    return purchases;
  }),
  on(deletePurchase, (state, action) => {
    const appState = localStorage.getItem('app-state');
    const purchases = state
      .filter((p) => p.product.id !== action.productId)
      .concat();
    if (appState) {
      localStorage.setItem(
        'app-state',
        JSON.stringify({ ...JSON.parse(appState), purchases: purchases })
      );
    } else {
      localStorage.setItem(
        'app-state',
        JSON.stringify({ purchases: purchases })
      );
    }
    return purchases;
  })
);
