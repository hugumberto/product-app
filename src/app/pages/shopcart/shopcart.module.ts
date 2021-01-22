import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopcartRoutingModule } from './shopcart-routing.module';
import { ShopcartComponent } from './shopcart.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ShopcartComponent],
  imports: [CommonModule, ShopcartRoutingModule, SharedModule],
})
export class ShopcartModule {}
