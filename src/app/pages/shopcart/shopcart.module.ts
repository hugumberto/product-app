import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'app/shared/shared.module';
import { ShopcartRoutingModule } from './shopcart-routing.module';
import { ShopcartComponent } from './shopcart.component';

@NgModule({
  declarations: [ShopcartComponent],
  imports: [CommonModule, ShopcartRoutingModule, SharedModule],
})
export class ShopcartModule {}
