import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Storage } from './storage';
import { ItemListModule } from "@components/item-list/item-list.module";

import { StorageRoutingModule } from './storage.routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    StorageRoutingModule,
    ItemListModule
  ],
  declarations: [Storage]
})
export class StorageModule {}
