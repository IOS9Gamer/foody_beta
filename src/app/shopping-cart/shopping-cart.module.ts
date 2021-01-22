import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoppingCart } from './shopping-cart';

import { ShoppingCartRoutingModule } from './shopping-cart.routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ShoppingCartRoutingModule
  ],
  declarations: [ShoppingCart]
})
export class ShoppingCartModule {}
