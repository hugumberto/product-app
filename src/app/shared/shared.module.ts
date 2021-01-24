import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HeaderComponent, CardComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, CardComponent],
})
export class SharedModule {}
