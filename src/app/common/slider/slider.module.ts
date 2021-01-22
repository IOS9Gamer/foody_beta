import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { Slider } from './slider';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MatBadgeModule
  ],
  exports: [
    Slider
  ],
  declarations: [Slider]
})
export class SliderModule {}
