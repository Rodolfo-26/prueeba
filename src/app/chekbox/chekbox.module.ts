import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChekboxPageRoutingModule } from './chekbox-routing.module';

import { ChekboxPage } from './chekbox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChekboxPageRoutingModule
  ],
  declarations: [ChekboxPage]
})
export class ChekboxPageModule {}
