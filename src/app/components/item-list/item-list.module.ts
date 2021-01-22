import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemList } from './item-list';
import { SliderModule } from '@common/slider/slider.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SliderModule
  ],
  exports: [
    ItemList
  ],
  declarations: [ItemList]
})
export class ItemListModule {}
