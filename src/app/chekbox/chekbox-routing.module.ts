import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChekboxPage } from './chekbox.page';

const routes: Routes = [
  {
    path: '',
    component: ChekboxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChekboxPageRoutingModule {}
