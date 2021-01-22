import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Storage } from './storage';


const routes: Routes = [
  {
    path: '',
    component: Storage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StorageRoutingModule {}
