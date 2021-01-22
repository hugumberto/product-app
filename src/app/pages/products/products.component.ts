import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/shared/entities/product.entity';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products!: IProduct[];
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getAll().subscribe((response: IProduct[]) => {
      this.products = response;
    });
  }
}
