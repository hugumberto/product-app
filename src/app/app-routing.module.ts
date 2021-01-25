import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'shopcart',
    loadChildren: () =>
      import('./pages/shopcart/shopcart.module').then((m) => m.ShopcartModule),
    data: {
      title: 'Carrinho',
      description: 'carrinho de compras',
      isShowHome: true,
    },
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/products/products.module').then((m) => m.ProductsModule),
    data: {
      title: 'Produtos',
      description: 'Listagem de produtos',
      isShowHome: false,
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
