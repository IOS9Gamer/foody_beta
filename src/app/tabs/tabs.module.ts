import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { TabsRoutingModule } from './tabs-routing.module';

import { Tabs } from './tabs';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsRoutingModule,
    MatIconModule
  ],
  declarations: [Tabs]
})
export class TabsModule {}
