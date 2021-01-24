import { createAction, props } from '@ngrx/store';
import { IPurchase } from '../entities/purchase.entity';

export const addPurchase = createAction(
  '[Purchase] add purchase',
  props<{ purchase: IPurchase }>()
);

export const minusPurchase = createAction(
  '[Purchase] minus purchase',
  props<{ purchase: IPurchase }>()
);

export const deletePurchase = createAction(
  '[Purchase] delete purchase',
  props<{ productId: number }>()
);
