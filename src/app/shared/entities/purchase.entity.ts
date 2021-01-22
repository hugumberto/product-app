import { IProduct } from './product.entity';

export interface IPurchase {
  product: IProduct;
  amount: number;
}
