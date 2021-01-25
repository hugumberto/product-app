import { addPurchase } from '@actions/purchase.action';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '@entities/product.entity';
import { IPurchase } from '@entities/purchase.entity';
import { Store } from '@ngrx/store';
import { IAppState } from 'app/app-state';
import { ProductService } from 'app/shared/services/product.service';
import { SeoService } from 'app/shared/services/seo.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products!: IProduct[];
  succesModal: boolean = false;
  constructor(
    private productService: ProductService,
    private store: Store<IAppState>
  ) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getAll().subscribe((response: IProduct[]) => {
      this.products = response;
    });
  }
  onAddPurchase(purchase: any) {
    this.store.dispatch(addPurchase({ purchase }));
    this.succesModal = true;
    setTimeout(() => {
      this.succesModal = false;
    }, 2000);
  }
}
