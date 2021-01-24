import { IPurchase } from './shared/entities/purchase.entity';

export interface IAppState {
  purchases: IPurchase[];
  productId: number;
}
